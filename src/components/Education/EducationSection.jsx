import "../../styles/Education/EducationSection.css";
export default function EducationSection({ prop }) {
  return (
    <div className="education-info">
      <div className="date-column">
        <p>{prop.startDate + "-" + prop.endDate}</p>
        <p>{prop.schoolLocation}</p>
      </div>
      <div className="info-column">
        <p id="school-name">{prop.name}</p>
        <p>{prop.degree}</p>
        <p>{prop.major}</p>
      </div>
    </div>
  );
}
