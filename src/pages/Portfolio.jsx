const projects = [
    {
        title: 'Munch Monitor Pro',
        liveUrl: 'https://munchmonitorpro.onrender.com',
        repoUrl: 'https://github.com/Vigneshwarie/munchMonitorPro', // On Viggy's Github, 4/19/2026
        role: 'UX/UI Design • Frontend Development • AI Chatbot Integration',
        summary:
            'A responsive web application focused on improving usability, content clarity, and overall user flow.',
        problem:
            'The platform required a clearer structure to help users understand available features and move through tasks without confusion.',
        solution:
            'I led the UI structure and frontend implementation, organizing the interface into clearer sections, improving visual hierarchy, and creating a more intuitive navigation experience.',
    },
    {
        title: 'Captain Crop',
        liveUrl: 'https://captaincrop.onrender.com/',
        repoUrl: 'https://github.com/rtocastro/captaincrop',
        role: 'Full-Stack Development • UX/UI Design • Firebase Integration',
        summary:
            'A community-focused harvest planning app designed to help people track, organize, and share locally grown food.',
        problem:
            'Neighborhood growers needed a simple way to plan harvests, organize what they have available, and support community swapping without relying on scattered messages or informal tracking.',
        solution:
            'I designed and built Captain Crop from scratch, using Firebase to support the app’s data-driven features while creating a friendly interface for harvest planning, community sharing, and local coordination.',
    },
    {
        title: 'Social Bee (Springboard System)',
        liveUrl: 'https://beesocial-k3js.onrender.com/', // done, current 4/19/2026
        repoUrl: 'https://github.com/rtocastro/socialbee', // done, current
        role: 'UX Strategy • System Design • Frontend Planning • React Development • AI Content Structuring',
        summary:
            'A structured content planning system designed to streamline multi-platform posting, scheduling, and workflow organization.',
        problem:
            'Managing consistent content across multiple platforms required a clearer system to organize ideas, timing, and execution without creating unnecessary complexity.',
        solution:
            'I designed a structured “Springboard” system that organizes content by platform, timing, and purpose, creating a repeatable workflow that simplifies planning and improves consistency across channels.',
    },
    {
    title: 'CARE',
    liveUrl: 'https://rollingnerdy.onrender.com/',
    repoUrl: 'https://github.com/rtocastro/rollingnerdy',
    role: 'Frontend Development • UX/UI Design • Personal Health Tracking • AI Integration',
    summary:
        'A pain tracking and journaling app created to document symptoms, daily condition changes, and recovery notes after an accident.',
    problem:
        'After an accident, keeping consistent records of pain, symptoms, and recovery details can be difficult, especially when that information may later need to be referenced clearly by legal professionals.',
    solution:
        'I built CARE from scratch as a structured journaling tool that makes it easier to record pain levels, notes, and personal documentation in a clear, organized format for future reference.',
},
{
    title: 'Paw Protect',
    liveUrl: 'https://pawandorder.onrender.com/',
    repoUrl: 'https://github.com/rtocastro/pawandorder',
    role: 'Frontend Development • UX/UI Design • Weather-Based Safety Tool',
    summary:
        'A simple pet safety app that helps dog owners check whether outdoor conditions may be too hot or too cold for their dog’s paws.',
    problem:
        'Concrete and pavement can become unsafe for dogs during extreme heat or cold, but pet owners do not always have a quick way to judge whether conditions are risky.',
    solution:
        'I created Paw Protect from scratch as a quick-check tool that uses outdoor conditions to help owners make safer walking decisions and protect their dogs’ feet from harsh pavement.',
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