import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { profile, services } from "../../../data/content";

// Basic in-memory rate limiting. This resets on cold start / doesn't share
// state across serverless instances — a deliberate "don't over-engineer"
// trade-off per the project brief, not a production-grade solution. If
// abuse becomes a real problem, swap this for a proper edge rate limiter
// (e.g. Upstash) keyed the same way.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

const validServiceSlugs = new Set(services.map((s) => s.slug));
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  projectDescription?: unknown;
  company?: unknown;
  budget?: unknown;
  timeline?: unknown;
};

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, service, projectDescription, company, budget, timeline } = body;

  const fieldErrors: Record<string, string> = {};
  if (typeof name !== "string" || name.trim().length < 2 || name.length > 120) {
    fieldErrors.name = "Enter your name.";
  }
  if (typeof email !== "string" || !emailPattern.test(email) || email.length > 200) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (typeof service !== "string" || !validServiceSlugs.has(service)) {
    fieldErrors.service = "Select a service.";
  }
  if (typeof projectDescription !== "string" || projectDescription.trim().length < 20 || projectDescription.length > 4000) {
    fieldErrors.projectDescription = "Give a bit more detail (at least 20 characters).";
  }
  if (company !== undefined && (typeof company !== "string" || company.length > 200)) fieldErrors.company = "That doesn't look right.";
  if (budget !== undefined && (typeof budget !== "string" || budget.length > 120)) fieldErrors.budget = "That doesn't look right.";
  if (timeline !== undefined && (typeof timeline !== "string" || timeline.length > 120)) fieldErrors.timeline = "That doesn't look right.";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", fieldErrors }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || profile.email;

  if (!resendApiKey || !fromEmail) {
    console.error(
      "Contact form: email not sent — RESEND_API_KEY and/or CONTACT_FROM_EMAIL is missing. See .env.example."
    );
    return NextResponse.json(
      { error: "Email delivery isn't configured on this deployment yet. Please email directly in the meantime." },
      { status: 503 }
    );
  }

  const serviceName = services.find((s) => s.slug === service)?.name ?? String(service);
  const nameStr = String(name);
  const emailStr = String(email);
  const descriptionStr = String(projectDescription);

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: emailStr,
      subject: `New project inquiry — ${serviceName}`,
      text: [
        "New project inquiry",
        "",
        `Name: ${nameStr}`,
        `Email: ${emailStr}`,
        `Company: ${company ? String(company) : "—"}`,
        "",
        `Service: ${serviceName}`,
        "",
        "Project description:",
        descriptionStr,
        "",
        `Budget: ${budget ? String(budget) : "Not specified"}`,
        `Timeline: ${timeline ? String(timeline) : "Not specified"}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend returned an error:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again or email directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
