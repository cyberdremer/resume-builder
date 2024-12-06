import '../../styles/Experience/ExperienceSection.css'
export default function ExperienceSection({
  startDate="",
  endDate="",
  jobLocation="",
  companyName="",
  jobTitle="",
  jobDescription="Hello",
}) {
    return(<div className="experience-info">
        <div className="timeframe-column">
            <p>{startDate + "-" + endDate}</p>
            <p>{jobLocation}</p>
        </div>
        <div className="info-column">
            <p id="job-title">{jobTitle}</p>
            <p>{companyName} </p>
            <p>{jobDescription}</p>
        </div>
    </div>);

}
