export default function Contact() {
  return (
    <section className="section">
      <p className="eyebrow">Contact</p>
      <h1>Let’s connect</h1>
      <p className="section-copy contact-copy">
        If you’re looking for someone who can contribute across UX, design
        systems, project coordination, and selective frontend work, feel free to
        reach out.
      </p>

      <div className="contact-card">
        <div className="contact-row">
          <span>Email</span>
          <a href="mailto:rick@example.com">rick@example.com</a>
        </div>
        <div className="contact-row">
          <span>GitHub</span>
          <a
            href="https://github.com/rtocastro"
            target="_blank"
            rel="noreferrer"
          >
            github.com/rtocastro
          </a>
        </div>
        <div className="contact-row">
          <span>LinkedIn</span>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com
          </a>
        </div>
      </div>
    </section>
  );
}