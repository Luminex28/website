// All copy here is sourced from the existing site content and the LinkedIn
// export provided by Swetank. Nothing here is invented. Fields marked
// "pending" are intentionally left for him to supply — do not fill these in
// with placeholder content.

export const profile = {
  name: "Swetank Pandey",
  firstName: "Swetank",
  lastName: "Pandey",
  headline: "Aspiring Data Analyst",
  headlineTools: ["SQL", "Excel", "Power BI", "Linux", "Python"],
  location: "Kanpur, Uttar Pradesh, India",
  email: "swetank2020@gmail.com",
  // Direct public contact email, shown on the contact section/page so people
  // can reach out without the form.
  contactEmail: "luminex.pandey@gmail.com",
  linkedin: "https://www.linkedin.com/in/swetank-pandey-788158347",
  // Phone intentionally omitted from public site copy — available in the
  // LinkedIn export if he wants a call/WhatsApp channel added later.
  resumeAvailable: true,
  resumeUrl: "/assets/swetank-pandey-resume.pdf",
};

export const hero = {
  eyebrow: "BUSINESS ANALYTICS · SYSTEMS",
  line1: "Every dataset tells a story —",
  line2: "I just enjoy digging until I find it.",
  sub:
    "Aspiring data analyst turning raw, chaotic information into something clear enough to act on. Outside of coursework, that same curiosity goes into building the Linux tools I actually use.",
  terminal: [
    { k: "whoami", v: "Swetank Pandey" },
    { k: "role", v: "Aspiring Data Analyst" },
    { k: "stack", v: "SQL · Excel · Power BI · Python" },
    { k: "status", v: "LEARNING & BUILDING" },
  ],
};

export const about = {
  eyebrow: "ABOUT",
  heading: ["TWO WAYS OF", "SEEING THE SAME", "PROBLEM."],
  lead:
    "I'm a Business Analytics student at K.R. Mangalam University, obsessed with the space where data, technology, and business strategy collide.",
  body: [
    "My toolkit is SQL, Excel, Power BI, and Python — the tools I use to take chaotic information and shape it into something clear enough to act on, whether that's a query, a dashboard, or an automated workflow.",
    "Outside of coursework, the same curiosity goes somewhere less business-facing: Linux, Rust, and small desktop tools built from scratch — not because a class asked for it, but because I like knowing how the underlying system actually works.",
  ],
  facts: [
    { label: "EDUCATION", value: "BBA Business Intelligence & Analytics" },
    { label: "INSTITUTION", value: "K.R. Mangalam University" },
    { label: "BASED IN", value: "Kanpur, India" },
    { label: "FOCUS", value: "Data · Business · Systems" },
  ],
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  what: string;
  why: string;
  how: string;
  tech: string[];
  status: string;
  repoUrl: string | null; // null = pending, do not fabricate
  demoUrl: string | null;
  accentMotif: "waveform" | "process";
  // Case-study-page fields — all sourced from the same original project
  // notes as the fields above, just organized for a longer-form layout.
  currentState: "Active" | "In development" | "Stable" | "Experimental";
  keyDecisions: string[];
  architectureNote: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "lumin",
    index: "01",
    name: "Lumin",
    tagline: "A launcher built for one desktop, not every desktop.",
    what:
      "A Linux application launcher built for an Omarchy / Hyprland setup — fast, visually polished, and designed to fit into that specific desktop environment rather than behave like a generic cross-platform launcher.",
    why:
      "Most launchers are built to work everywhere, which means they fit nowhere in particular. I wanted one that felt like part of my own setup, and building it was a chance to learn by making a real desktop utility instead of another web project.",
    how:
      "Built around the Hyprland / Wayland compositor using QuickShell and QML, with the interaction and interface work as the main focus rather than an afterthought.",
    tech: ["Linux", "Hyprland", "QuickShell", "QML", "Git"],
    status: "In progress",
    repoUrl: "https://github.com/Luminex28/Lumin.git",
    demoUrl: null,
    accentMotif: "waveform",
    currentState: "Experimental",
    keyDecisions: [
      "Designed specifically around the Hyprland / Wayland compositor rather than aiming for cross-desktop compatibility.",
      "Focused heavily on the launcher's UI and interaction experience rather than treating it as an afterthought.",
      "Built as a personal desktop utility that fits one real setup, not a generic web-style project.",
    ],
    architectureNote:
      "Lumin sits directly on top of the Hyprland / Wayland compositor. QuickShell provides the shell surface it renders into, and the interface itself is built in QML — so the stack is compositor → shell layer → QML interface, with the interaction design treated as the core of the project rather than a layer on top of existing logic.",
  },
  {
    slug: "taskl",
    index: "02",
    name: "TaskL",
    tagline: "Reading a Linux system, not just its front end.",
    what:
      "A system monitoring and system-intelligence application for Linux — a dedicated UI for understanding what's actually happening on a machine.",
    why:
      "I wanted to build something with more depth than a typical frontend project, and use it as a real excuse to learn Linux internals, process monitoring, and Rust.",
    how:
      "Written in Rust with a GTK4 / libadwaita interface, structured as a workspace that keeps core system logic separate from the UI layer — intentionally exploring system-level functionality rather than only building a visual shell on top of it.",
    tech: ["Rust", "GTK4", "libadwaita", "Cargo", "Linux"],
    status: "In progress",
    repoUrl: null,
    demoUrl: null,
    accentMotif: "process",
    currentState: "In development",
    keyDecisions: [
      "Built as a Rust application rather than reaching for a higher-level scripting stack, to actually engage with system-level programming.",
      "Structured as a workspace with a clear separation between core/system functionality and the UI layer.",
      "UI built with GTK4 and libadwaita rather than a web-view wrapper, to keep it a native Linux application.",
      "Intentionally explored Linux system internals and process monitoring rather than only building a visual dashboard over existing tools.",
    ],
    architectureNote:
      "TaskL is structured as a Cargo workspace that keeps core system-reading logic separate from the GTK4 / libadwaita UI layer, rather than mixing the two — so system data collection can evolve independently of how it's displayed.",
  },
];

export type SecondaryProject = {
  name: string;
  description: string;
  tech: string[];
  status: string;
  url: string | null;
};

export const secondaryProjects: SecondaryProject[] = [
  {
    name: "AI Fluency — HRMS Dashboard",
    description:
      "A class project for AI Fluency: an HRMS dashboard concept for managing employee attendance, performance reviews, and payroll in one place, built by turning a natural-language business requirement into a working prototype with AI-assisted development.",
    tech: ["Google AI Studio", "AI-assisted prototyping"],
    status: "Completed — class project",
    url: null,
  },
  {
    name: "Manim Animations",
    description:
      "A collection of mathematical and educational animations generated programmatically with Manim, organized as separate scenes and projects — an ongoing way to learn the library by building with it.",
    tech: ["Python", "Manim"],
    status: "Experimental",
    url: null,
  },
];

export const otherExperiments =
  "Alongside these, there's a longer tail of smaller experiments — a habit tracker, coursework, and one-off scripts in Python, SQL, and R. Not portfolio pieces yet, but part of the same habit of learning by building.";

export const experience = {
  eyebrow: "EXPERIENCE",
  role: "Data Analyst Intern",
  company: "The Indus Group Co",
  location: "Gurugram",
  dates: "June 2026 – July 2026",
  duration: "2 months",
  bullets: [
    "Worked with data using SQL and Excel to clean, organize, and find useful insights.",
    "Created reports and dashboards, working with different teams to support business decisions.",
  ],
};

export const education = {
  eyebrow: "EDUCATION",
  institution: "K.R. Mangalam University",
  degree: "Bachelor of Business Administration, Business Intelligence & Analytics",
  dates: "September 2025 – May 2028",
  certifications: ["Master Class on Digital Market"],
};

export const skillGroups = [
  {
    label: "Data & Business",
    items: ["Data Analytics", "Business Intelligence", "SQL", "Excel", "Power BI", "Statistics"],
  },
  {
    label: "Systems & Languages",
    items: ["Python", "Rust", "Linux", "Unix"],
  },
  {
    label: "Currently exploring",
    items: ["AI / Machine Learning", "GTK4 & QML", "Manim"],
  },
];

export const contact = {
  eyebrow: "CONTACT",
  heading: ["LET'S BUILD", "SOMETHING USEFUL."],
  body:
    "Open to internships, collaboration, and data-focused opportunities — reach out by email or LinkedIn.",
};

export const siteUrl = "https://swetankpandey.dev"; // placeholder — update once a real domain is live

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Resume", href: profile.resumeUrl, external: true },
  { label: "Contact", href: "/contact" },
];

// GitHub profile URL sourced from the resume.
export const externalLinks = { github: "https://github.com/Luminex28" as string | null };

export type Service = {
  slug: string;
  name: string;
  summary: string;
  helpWith: string[];
  detail: string;
};

// Categories and rough wording were specified directly; kept concise and
// grounded in the skills/tools already documented above rather than
// generic freelancer language.
export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary: "Custom websites and web experiences designed around a specific goal, audience, or product.",
    helpWith: [
      "Portfolio, product, or informational sites built from scratch",
      "Interfaces that need to feel considered, not templated",
      "Modern frontend stacks (this site is one example of the approach)",
    ],
    detail: "Built with the same care as this site — real content, no filler sections.",
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    summary: "Data analysis, visualization, dashboards, reporting, and business-focused insights.",
    helpWith: [
      "Cleaning and organizing messy datasets",
      "Dashboards and reports in Power BI or Excel",
      "SQL queries that turn raw tables into answers",
    ],
    detail: "SQL · Excel · Power BI · Python",
  },
  {
    slug: "automation",
    name: "Automation",
    summary: "Custom scripts, tools, and workflows that eliminate repetitive work and improve productivity.",
    helpWith: [
      "Scripting repetitive data or file-handling tasks",
      "Small internal tools that save manual steps",
      "Workflow automation on Linux systems",
    ],
    detail: "Python-first, built to run unattended once it's set up.",
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    summary: "Custom applications and utilities built around a specific problem or workflow.",
    helpWith: [
      "Desktop utilities built for a specific system or workflow",
      "Systems-level tools (see Lumin and TaskL for examples of this in practice)",
      "Applications where the architecture matters, not just the UI",
    ],
    detail: "Rust · Python · Linux systems programming",
  },
  {
    slug: "other",
    name: "Other / Custom Project",
    summary: "For projects that don't fit neatly into the categories above.",
    helpWith: [
      "Not sure which category fits? Describe the problem and I'll tell you honestly if it's something I can help with",
    ],
    detail: "Every project starts as a conversation, not a template.",
  },
];
