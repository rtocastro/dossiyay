const projects = [
    {
        title: 'Social Bee (Springboard System)',
        liveUrl: 'https://beesocial-k3js.onrender.com/', // done, current 4/19/2026
        repoUrl: 'https://github.com/rtocastro/socialbee', // done, current
        role: 'UX Strategy • System Design • Frontend Planning',
        summary:
            'A structured content planning system designed to streamline multi-platform posting, scheduling, and workflow organization.',
        problem:
            'Managing consistent content across multiple platforms required a clearer system to organize ideas, timing, and execution without creating unnecessary complexity.',
        solution:
            'I designed a structured “Springboard” system that organizes content by platform, timing, and purpose, creating a repeatable workflow that simplifies planning and improves consistency across channels.',
    },
  {
        title: 'Munch Monitor Pro',
        liveUrl: 'https://munchmonitorpro.onrender.com',
        repoUrl: 'https://github.com/Vigneshwarie/munchMonitorPro', // On Viggy's Github, 4/19/2026
        role: 'UX/UI Design • Frontend Development',
        summary:
            'A responsive web application focused on improving usability, content clarity, and overall user flow.',
        problem:
            'The platform required a clearer structure to help users understand available features and move through tasks without confusion.',
        solution:
            'I led the UI structure and frontend implementation, organizing the interface into clearer sections, improving visual hierarchy, and creating a more intuitive navigation experience.',
    },
    {
        title: 'Helpy Helperton',
        liveUrl: 'https://helpyhelperton.onrender.com',
        repoUrl: 'https://github.com/rtocastro/helpyhelperton', // replaced with current version, 4/19/2026
        role: 'Frontend Development • UX Support',
        summary:
            'A web experience designed to make user actions and information easier to access and understand.',
        problem:
            'Users needed a more straightforward way to navigate content and understand what actions to take next.',
        solution:
            'I contributed to frontend development while improving layout clarity and interaction flow, helping create a more guided and user-friendly experience.',
    },
    {
        title: 'Portfolio Repositioning',
        liveUrl: '/',
        repoUrl: 'https://github.com/rtocastro/dossiyay', // done with current version, 4/19/2026
        role: 'UX Strategy • Design Systems Thinking • Frontend',
        summary:
            'A strategic redesign of my portfolio to better reflect my work in UX, design systems, and project leadership.',
        problem:
            'The previous version positioned me as a junior developer rather than someone capable of leading UX and structured product work.',
        solution:
            'I restructured the site from the ground up, refining messaging, improving layout hierarchy, and aligning the presentation with UX strategy, system thinking, and implementation readiness.',
    },
];

export default function Portfolio() {
    return (
        <section className="section">
            <p className="eyebrow">Selected work</p>
            <h1>Projects with clearer structure and stronger intent</h1>
            <p className="section-copy portfolio-intro">
                I focus on structuring digital experiences that are easier to use,
                easier to build, and easier to scale.
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