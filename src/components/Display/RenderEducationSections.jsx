import EducationSection from "../Education/EducationSection.jsx";
import RenderSection from "./RenderSections.jsx";

export default function RenderEducationSections({educations}){
    return(
        <div className="education-info-section resume-section">
        <RenderSection
        array={educations}
        Component={EducationSection}
        title="Education"
        />
    </div>
    );
}