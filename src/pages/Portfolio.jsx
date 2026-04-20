const projects = [
  {
    title: 'Munch Monitor Pro',
    liveUrl: 'https://munchmonitorpro.onrender.com',
    repoUrl: 'https://github.com/',
    role: 'UI Design / Frontend Development',
    summary:
      'A responsive web app focused on usability, structure, and clear task flow.',
    problem:
      'The goal was to organize a functional experience that made content and user actions easier to navigate.',
    solution:
      'I helped shape the interface structure, improve presentation clarity, and translate ideas into a working frontend experience.',
  },
  {
    title: 'Helpy Helperton',
    liveUrl: 'https://helpyhelperton.onrender.com',
    repoUrl: 'https://github.com/',
    role: 'Frontend Development / UX Support',
    summary:
      'A project centered on making information and actions easier for users to access.',
    problem:
      'The product needed a cleaner path for users to understand what to do and where to go next.',
    solution:
      'I contributed to the frontend and helped support a more usable, organized interface experience.',
  },
  {
    title: 'Portfolio Repositioning',
    liveUrl: '/',
    repoUrl: 'https://github.com/rtocastro/dossiyay',
    role: 'UX Strategy / Content Design / Frontend Refresh',
    summary:
      'A strategic refresh of my portfolio to better reflect my current work in UX, systems thinking, and project leadership.',
    problem:
      'The previous portfolio positioned me as an early-career coding portfolio rather than someone leading UX and delivery work.',
    solution:
      'I rewrote the site, upgraded the hierarchy, and reframed the content around project thinking, design structure, and implementation readiness.',
  },
];

export default function Portfolio() {
  return (
    <section className="section">
      <p className="eyebrow">Selected work</p>
      <h1>Projects with clearer structure and stronger intent</h1>
      <p className="section-copy portfolio-intro">
        These projects reflect my approach to building digital experiences with
        usability, clarity, and scalable structure in mind.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <p className="project-role">{project.role}</p>
              <h2>{project.title}</h2>
              <p className="section-copy">{project.summary}</p>
            </div>

            <div className="project-body">
              <div className="project-block">
                <h3>Problem</h3>
                <p>{project.problem}</p>
              </div>

              <div className="project-block">
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </div>
            </div>

            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live site
              </a>
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Repository
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}