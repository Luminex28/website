# Handoff notes

## One thing to fix before deploying
`app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` all reference a placeholder
domain: `https://swetankpandey.dev`. Replace this with your actual domain once you
have one (or your Vercel URL) — it's used for Open Graph tags, the sitemap, and
robots.txt.


Everything on the site is real content — nothing invented. A few things are
intentionally left open for you to fill in rather than guessed at:

## Needed to finish the Featured Work section
- **Lumin GitHub repo URL** — currently shows "SOURCE LINK PENDING" instead of a broken/fake link.
- **TaskL GitHub repo URL** — same.
- Once you have them, drop the URLs into `data/content.ts` under `featuredProjects[].repoUrl`.
- If either project gets a live demo at some point, there's a `demoUrl` field ready for that too.

## Contact section
- **Resume PDF**: still not present as a file. Add it at `public/assets/swetank-pandey-resume.pdf`
  and flip `profile.resumeAvailable` to `true` in `data/content.ts` — the button will
  light up automatically.
- **Phone number**: intentionally left off the public site (it was in your LinkedIn
  export but publishing a phone number on a public site is your call, not mine to
  make for you). If you want a call/WhatsApp button, say so and I'll wire it in.

## Visual assets
- No project screenshots exist yet. The Lumin and TaskL showcase sections currently
  use abstract generative SVG compositions (a waveform for Lumin, a system-panel
  layout for TaskL) instead of fake screenshots. If you'd rather use real screenshots
  or a short screen-recording-derived still once the apps are further along, swap
  `<ProjectVisual variant="..." />` in `components/sections/FeaturedWork.tsx` for an
  `<img>` / `<video>`.
- `app/icon.svg` (the small "S" monogram) is the only image asset in the repo; its
  colors seeded the new copper/steel palette.

## Content not featured (by your own call)
- Smaller Python/SQL/R coursework and the habit tracker are folded into one line in
  the Other Work section rather than given individual cards. If you later decide one
  is worth featuring, it can go into `secondaryProjects` or `featuredProjects` in
  `data/content.ts`.

## Everything else
All copy, the Indus Group internship, education, and skills are pulled directly from
your LinkedIn export and the original site content — nothing paraphrased into
corporate-sounding language, nothing exaggerated.
