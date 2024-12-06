import ExperienceSection from "../Experience/ExperienceSection.jsx";
import RenderSection from "./RenderSections.jsx";

export default function RenderExperienceSections({experiences}){
    return(
        <div className="experience-info-section resume-section">
            <RenderSection
            array={experiences}
            Component={ExperienceSection}
            title="Experience"
            />
        </div>
    );

}