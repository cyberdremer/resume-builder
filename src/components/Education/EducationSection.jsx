import '../../styles/Education/EducationSection.css'
export default function EducationSection({
  startDate="",
  endDate="",
  schoolLocation="",
  schoolName="",
  degree="",
  major=""
}) {
  return (
    <div className="education-info">
      <div className="date-column">
        <p>{startDate + "-" + endDate}</p>
        <p>{schoolLocation}</p>
      </div>
      <div className="info-column">
        <p id="school-name">{schoolName}</p>
        <p>{degree}</p>
        <p>{major}</p>
      </div>
    </div>
  );
}
