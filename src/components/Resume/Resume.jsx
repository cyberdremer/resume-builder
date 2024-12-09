import EducationSection from "../Education/EducationSection";
import './Resume.css'
import ExperienceSection from "../Experience/ExperienceSection";
import PersonalInfoSection from "../PersonalDetails/PersonalInfoSection";
import { dummyData } from "../../testing/dummypersonalinfo";
import RenderEducationSections from "../Display/RenderEducationSections.jsx";
import RenderExperienceSections from "../Display/RenderExperienceSections.jsx";
export default function Resume({personalInfo, educationSection, experienceSection}) {
  return (
    <div className="resume-container">
      <PersonalInfoSection
      personalInfo={personalInfo}
      />
      <RenderEducationSections
      educations={educationSection}
      />
      <RenderExperienceSections
      experiences={experienceSection}
      />

    </div>
  );
}
