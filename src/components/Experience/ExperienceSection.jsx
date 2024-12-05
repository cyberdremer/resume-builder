export default function ExperienceSection({
  startDate,
  endDate,
  jobLocation,
  companyName,
  jobTitle,
  jobDescription,
}) {
    return(<div className="experience-info">
        <div className="timeframe-column">
            <span>{startDate + "-" + endDate}</span>
            <span>{jobLocation}</span>
        </div>
        <div className="jobinfo-column">
            <span id="job-title">{jobTitle}</span>
            <span>{companyName}<br />{jobDescription}</span>
        </div>
    </div>);

}
