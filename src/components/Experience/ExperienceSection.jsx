import "../../styles/Experience/ExperienceSection.css";
export default function ExperienceSection({ prop }) {
  return (
    <div className="experience-info">
      <div className="timeframe-column">
        <p>{prop.startDate + "-" + prop.endDate}</p>
        <p>{prop.jobLocation}</p>
      </div>
      <div className="info-column">
        <p id="job-title">{prop.jobTitle}</p>
        <p>{prop.name} </p>
        <p>{prop.jobDescription}</p>
      </div>
    </div>
  );
}
