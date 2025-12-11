export default function Projects() {
  const projects = [
    {
      title: "Simple Calculator",
      description: "A basic arithmetic calculator.",
      tech: "C++" 
    },
    {
      title: "Interactive Monthly Calendar",
      description: "Console-based C++ program to display months and generate calendars.",
      tech: "C++"
    },
    {
      title: "University System",
      description: "A system managing student records / enrollment / courses (school project).",
      tech: "JavaScript, MySQL"
    },
    {
      title: "13th PSITS Region 12 SDE Video Editing",
      description: "Video editing project for contest entry under SDE.",
      tech: "Premiere Pro"
    },
    {
      title: "Turning Characters into a Realistic Style",
      description: "Self-explanatory.",
      tech: "Photoshop"
    },
  ];

  return (
    <div className="projectsContainer">
      <h2 className="projectsTitle">Projects</h2>
      <div className="projectGrid">
        {projects.map((p, i) => (
          <div key={i} className="projectCard">
            <h3>{p.title}</h3>
            <p className="projectDesc">{p.description}</p>
            <p className="projectTech"><strong>Tech:</strong> {p.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
