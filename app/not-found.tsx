import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="section contact" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: "none" }}>
        <p className="eyebrow">404</p>
        <span className="heading-line" style={{ margin: "18px auto" }} />
        <h2>PAGE NOT<br /><em>FOUND.</em></h2>
        <p>Whatever you were looking for isn&apos;t here. Might be worth heading back.</p>
        <div className="contact-actions">
          <Link className="button primary" href="/">Back to home <span className="arrow">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
