import Buttons from "../../Buttons/Buttons.jsx";
import InputGroup from "../InputGroup.jsx";
import StartDateEndDate from "../StartEndDateComponent.jsx";

import "../../styles/Experience/ExperienceForm.css";

export default function ExperienceForm({
  name,
  jobTitle,
  startDate,
  endDate,
  jobLocation,
  jobDescription,
  onChange,
  id,
  save,
  cancel,
  remove,
}) {
  return (
    <form
      className="experience-form section-form"
      id={id}
      data-array-name="experiences"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        inputType="text"
        id="company-name"
        labelText="Company Name"
        placeholder="Enter company name"
        value={name}
        onChange={onChange}
        data-key="name"
      />
      <InputGroup
        inputType="text"
        id="position-title"
        labelText="Position Title"
        placeholder="Enter position title"
        value={jobTitle}
        onChange={onChange}
        data-key="jobTitle"
      />

      <StartDateEndDate
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
      />

      <InputGroup
        inputType="text"
        id="job-location"
        labelText="Job Location"
        placeholder="Enter the job location"
        value={jobLocation}
        onChange={onChange}
        data-key="jobLocation"
      />

      <InputGroup
        inputType="textarea"
        id="job-description"
        labelText="Job description"
        placeholder="Enter the hob description..."
        value={jobDescription}
        onChange={onChange}
        data-key="jobDescription"
      />
      <Buttons save={save} cancel={cancel} remove={remove} />
    </form>
  );
}
