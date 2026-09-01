import { experiences } from "./experience";

export default function ExperienceSection() {
  return (
    <div className="experience">
      <div className="experience-head">
        <h2 className="section-title experience-heading">Experience</h2>
      </div>

      <ol className="experience-list">
        {experiences.map((job) => (
          <li key={job.id} className="experience-row">
            <p className="experience-company">{job.company}</p>
            <p className="experience-dates">{job.dates}</p>
            <p className="experience-role">{job.role}</p>
            <p className="experience-desc">{job.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
