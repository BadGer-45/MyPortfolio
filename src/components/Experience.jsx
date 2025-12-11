export default function Experience() {
  const experiences = [
    { date: "2017 - 2023", role: "GSCNHS - Media" },
    { date: "2025 - 2025", role: "Custad Apple Outsourcing Inc. - On-the-Job Trainee" },
    { date: "2025 - 2025", role: "13th PSITS Region 12 - Video Editing (SDE)" },
    { date: "2021 - Present", role: "Freelance Photo Editing" },
    { date: "2024 - Present", role: "RMMC - SMCC" },
  ];

  return (
    <div className="experienceContainer">
      <h2 className="experienceTitle">Experience</h2>
      <ul className="timeline">
        {experiences.map((exp, index) => (
          <li key={index}>
            <div className="experienceCard">
            <span className="timelineDate">{exp.date}</span>
            <div className="timelineContent">{exp.role}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
