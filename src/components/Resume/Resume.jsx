import EducationSection from "../Education/EducationSection";
import ExperienceSection from "../Experience/ExperienceSection";
import PersonalInfoSection from "../PersonalDetails/PersonalInfoSection";
import { dummyData } from "../../testing/dummypersonalinfo";
export default function Resume() {
  return (
    <div className="resume-container">
      <PersonalInfoSection
      fullname={dummyData["personalInfo"].fullName}
      email={dummyData["personalInfo"].email}
      address={dummyData["personalInfo"].address}
      phoneNumber={dummyData["personalInfo"].address} 
      
      />
      <EducationSection
      startDate={dummyData["schoolInfo"].startDate}
      endDate ={dummyData["schoolInfo"].endDate}
      schoolName={dummyData["schoolInfo"].name}
      schoolLocation={dummyData["schoolInfo"].schoolLocation}
      degree={dummyData["schoolInfo"].degree}
      major={dummyData["schoolInfo"].major}
       />
      <ExperienceSection
      startDate={dummyData["employmentInfo"].startDate}
      endDate={dummyData["employmentInfo"].endDate}
      jobLocation={dummyData["employmentInfo"].jobLocation}
      companyName={dummyData["employmentInfo"].companyName}
      jobTitle={dummyData["employmentInfo"].jobTitle}


       />
    </div>
  );
}
