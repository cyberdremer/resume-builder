import "../../styles/PersonalDetail/PersonalInfo.css"

export default function PersonalInfoSection({
    personalInfo
  
}) {
    return(
  <div className="personal-info">
    <h1 className="full-name">{personalInfo.name}</h1>
    <div className="contact-info">
      {personalInfo.email && (
        <div>
          <span>{personalInfo.email}</span>
        </div>
      )}

      {personalInfo.phoneNumber && (
        <div>
          <span>{personalInfo.phoneNumber}</span>
        </div>
      )}

      {
        personalInfo.address && (
            <div>
                <span>{personalInfo.address}</span>
            </div>
        )
      }
    </div>
  </div>);
}
