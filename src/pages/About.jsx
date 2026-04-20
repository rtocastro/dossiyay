import devRick from '../assets/devRICK.png';

export default function About() {
  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">UX / Design Systems / Project Leadership</p>
          <h1>
            I design scalable, accessible digital experiences that connect users,
            platforms, and ideas.
          </h1>
          <p className="hero-text">
            I’m Rick Torres, a project manager, UX/UI designer, and frontend
            developer focused on building thoughtful digital systems for
            education, community, and innovation.
          </p>
          <p className="hero-text">
            My work sits at the intersection of user experience, visual
            structure, and implementation planning. I help turn broad ideas into
            clear product direction, usable interfaces, and delivery-ready
            systems.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="/portfolio">
              View selected work
            </a>
            <a className="button-secondary" href="/contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img src={devRick} alt="Rick Torres portrait" className="profile-image" />
        </div>
      </section>

      <section className="section grid-two">
        <div className="card">
          <p className="eyebrow">What I do</p>
          <h2>How I work</h2>
          <ul className="feature-list">
            <li>Discovery, stakeholder alignment, and UX strategy</li>
            <li>User journeys, information architecture, and wireframes</li>
            <li>UI systems and scalable visual consistency</li>
            <li>Frontend alignment with React-based workflows</li>
            <li>Project communication, reviews, and handoff planning</li>
          </ul>
        </div>

        <div className="card">
          <p className="eyebrow">Current focus</p>
          <h2>What I’m building toward</h2>
          <p className="section-copy">
            I’m currently focused on projects that need strong structure across
            UX, design systems, and implementation planning, especially work in
            education, public interest, and community-centered digital products.
          </p>
          <p className="section-copy">
            My goal is to help teams move from idea to execution with more
            clarity, better usability, and stronger long-term consistency.
          </p>
        </div>
      </section>
    </>
  );
}