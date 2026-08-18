"use client";

import { useState, type FormEvent } from "react";
import { services } from "../../data/content";

type Status = "idle" | "submitting" | "success" | "error";
type Values = {
  name: string; email: string; service: string; projectDescription: string;
  company: string; budget: string; timeline: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ initialService }: { initialService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    service: initialService ?? "",
    projectDescription: "",
    company: "",
    budget: "",
    timeline: "",
  });

  function update<K extends keyof Values>(key: K, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }));
  }

  function validateClient(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (values.name.trim().length < 2) errs.name = "Enter your name.";
    if (!emailPattern.test(values.email)) errs.email = "Enter a valid email address.";
    if (!values.service) errs.service = "Select a service.";
    if (values.projectDescription.trim().length < 20) errs.projectDescription = "Give a bit more detail (at least 20 characters).";
    return errs;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateClient();
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success">
        <p className="eyebrow">MESSAGE SENT</p>
        <h2>THANKS — YOUR<br /><em>INQUIRY IS IN.</em></h2>
        <p>I&apos;ll get back to you after reviewing the details.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">Name *</label>
        <input
          id="name" value={values.name} maxLength={120} disabled={status === "submitting"}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!fieldErrors.name} aria-describedby={fieldErrors.name ? "name-error" : undefined}
        />
        {fieldErrors.name && <span id="name-error" className="form-error" role="alert">{fieldErrors.name}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="email">Email *</label>
        <input
          id="email" type="email" value={values.email} maxLength={200} disabled={status === "submitting"}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "email-error" : undefined}
        />
        {fieldErrors.email && <span id="email-error" className="form-error" role="alert">{fieldErrors.email}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="service">Service / project type *</label>
        <select
          id="service" value={values.service} disabled={status === "submitting"}
          onChange={(e) => update("service", e.target.value)}
          aria-invalid={!!fieldErrors.service} aria-describedby={fieldErrors.service ? "service-error" : undefined}
        >
          <option value="" disabled>Select a service</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>
        {fieldErrors.service && <span id="service-error" className="form-error" role="alert">{fieldErrors.service}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="description">Project description *</label>
        <textarea
          id="description" rows={6} value={values.projectDescription} maxLength={4000} disabled={status === "submitting"}
          onChange={(e) => update("projectDescription", e.target.value)}
          aria-invalid={!!fieldErrors.projectDescription} aria-describedby={fieldErrors.projectDescription ? "description-error" : undefined}
        />
        {fieldErrors.projectDescription && <span id="description-error" className="form-error" role="alert">{fieldErrors.projectDescription}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="company">Company / organization</label>
        <input id="company" value={values.company} maxLength={200} disabled={status === "submitting"} onChange={(e) => update("company", e.target.value)} />
      </div>

      <div className="form-row-split">
        <div className="form-row">
          <label htmlFor="budget">Budget <span className="optional-tag">(optional)</span></label>
          <input id="budget" value={values.budget} maxLength={120} disabled={status === "submitting"} onChange={(e) => update("budget", e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="timeline">Timeline <span className="optional-tag">(optional)</span></label>
          <input id="timeline" value={values.timeline} maxLength={120} disabled={status === "submitting"} onChange={(e) => update("timeline", e.target.value)} />
        </div>
      </div>

      {status === "error" && <p className="form-error form-error-general" role="alert">{errorMsg}</p>}

      <button className="button primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
