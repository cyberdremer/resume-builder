import { useState } from "react";
import "./App.css";
import uniqid from 'uniqid'
import PersonalDetail from "./components/PersonalDetails/PersonalDetail.jsx";
import EducationForm from "./components/Education/EducationForm.jsx";
import ExperienceForm from "./components/Experience/ExperienceForm.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Dropdown from "./components/Dropdown/Dropdown.jsx";
import { dummyData } from "./testing/dummypersonalinfo.js";
import DropdownHeader from "./components/Dropdown/DropdownHeader.jsx";
import RenderForms from "./components/Display/RenderForms.jsx";
import { use } from "react";
import RenderFormHeaders from "./components/Display/RenderForms.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState(dummyData.personalInfo);
  const [educationInfo, setEducationInfo] = useState(dummyData.schoolInfo);
  const [experienceInfo, setExperienceInfo] = useState(
    dummyData.employmentInfo
  );

  const [activeHeader, setActiveHeader] = useState(0);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleExperienceInfoChange(e) {
    const id = e.target.closest("form").id;
    const { key } = e.target.dataset;
    const input = e.target.value;

    const currentInfoExperienceIndex = experienceInfo.findIndex(
      (exp) => exp.id === id
    );
    const updatedInfoExperience = {
      ...experienceInfo[currentInfoExperienceIndex],
      [key]: input,
    };
    const newExperienceInfo = [
      ...experienceInfo.slice(0, currentInfoExperienceIndex),
      updatedInfoExperience,
      ...experienceInfo.slice(currentInfoExperienceIndex + 1),
    ];
    setExperienceInfo(newExperienceInfo);
  }

  function handleEducationInfoChange(e) {
    const id = e.target.closest("form").id;
    const { key } = e.target.dataset;
    const input = e.target.value;

    const currentEducationInfoIndex = educationInfo.findIndex(
      (ed) => ed.id === id
    );
    const updatedEducationInfo = {
      ...educationInfo[currentEducationInfoIndex],
      [key]: input,
    };
    const newEducationInfo = [
      ...educationInfo.slice(0, currentEducationInfoIndex),
      updatedEducationInfo,
      ...educationInfo.slice(currentEducationInfoIndex + 1),
    ];
    setEducationInfo(newEducationInfo);
  }

  function removeEducationForm(e) {
    const id = e.target.closest("form").id;
    setEducationInfo(educationInfo.filter((ed) => ed.id !== id));
  }

  function removeExperienceForm(e) {
    const id = e.target.closest("form").id;
    setExperienceInfo(experienceInfo.filter((exp) => exp.id !== id));
  }

  function createForm(arrayName, object) {
    let clone;
    if (arrayName === "education") {
      clone = structuredClone(educationInfo);
      clone.push(object);
      setEducationInfo(clone);
    } else {
      clone = structuredClone(experienceInfo);
      clone.push(object);
      setExperienceInfo(clone);
    }
  }

  const createExperienceForm = () => {
    createForm("experience", {
      name: "New Experience",
      jobTitle: "",
      startDate: "",
      endDate: "",
      jobLocation: "",
      jobDescription: "",
      id: uniqid(),
    });
  };

  const createEducationForm = () => {
    createForm("education", {
      name: "New Education",
      schoolLocation: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    });
  };

  return (
    <div className="app-container">
      <div className="editing-side">
        <PersonalDetail onChange={handlePersonalInfoChange} {...personalInfo} />
        <DropdownHeader
          onClick={() => setActiveHeader(0)}
          elementName="Education"
        ></DropdownHeader>

        <RenderForms
          onAdd={createEducationForm}
          remove={removeEducationForm}
          isActive={activeHeader === 0}
          formType="education"
          onChange={handleEducationInfoChange}
          array={educationInfo}
        ></RenderForms>

        <DropdownHeader
          onClick={() => setActiveHeader(1)}
          elementName="Experience"
        ></DropdownHeader>

        <RenderForms
          onAdd={createExperienceForm}
          remove={removeExperienceForm}
          isActive={activeHeader === 1}
          formType="experience"
          onChange={handleExperienceInfoChange}
          array={experienceInfo}
        ></RenderForms>
      </div>
      <div className="resume-side">
        <Resume
          educationSection={educationInfo}
          experienceSection={experienceInfo}
          personalInfo={personalInfo}
        />
      </div>
    </div>
  );
}

export default App;
