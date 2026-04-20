import myResume from '../assets/myresume.pdf';

export default function Resume() {
  const skills = [
    'UX/UI design',
    'Design systems',
    'Wireframing and user flows',
    'Responsive design',
    'React',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind',
    'Bootstrap',
    'Node.js',
    'Express.js',
    'SQL',
    'REST APIs',
    'Project coordination',
    'Developer handoff documentation',
  ];

  return (
    <section className="section">
      <p className="eyebrow">Resume</p>
      <h1>Skills and experience</h1>
      <p className="section-copy">
        My background includes frontend development, UX/UI design, project
        coordination, and cross-functional collaboration. I’m especially
        interested in work that needs strong structure, thoughtful interfaces,
        and clear execution planning.
      </p>

      <div className="card">
        <h2>Core strengths</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="resume-actions">
        <a
          className="button-primary"
          href={myResume}
          target="_blank"
          rel="noreferrer"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}