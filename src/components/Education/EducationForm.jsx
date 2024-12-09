import InputGroup from "../InputGroup.jsx";
import Buttons from "../../Buttons/Buttons.jsx";
import StartDateEndDate from "../StartEndDateComponent.jsx";
import '../../styles/Education/EducationForm.css'

export default function EducationForm({
  name = "",
  schoolLocation = "",
  degree = "",
  major = "",
  startDate= "",
  endDate = "",
  id = "",
  onChange,
  save,
  cancel,
  remove
}) {

    return(
        <form className="education-form section-form"
        id={id}
        data-array-name="educations"
        onSubmit={(e)=> e.preventDefault()}
        >
        
        <InputGroup
        inputType="text"
        id="school-name"
        labelText="School Name"
        placeholder="Enter school name"
        value={name}
        onChange={onChange}
        data-key="name"
        />

        <InputGroup
        inputType="text"
        id="school-location"
        labelText="School Location"
        placeholder="Enter school location"
        value={schoolLocation}
        onChange={onChange}
        data-key="schoolLocation"
        />

        <InputGroup
        inputType="text"
        id="degree-name"
        labelText="Degree"
        placeholder="Enter degree"
        value={degree}
        onChange={onChange}
        data-key="degree"
        />

        <InputGroup
        inputType="text"
        id="major"
        labelText="Major"
        placeholder="Enter major"
        value={major}
        onChange={onChange}
        data-key="major"
        />

        <StartDateEndDate
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        />


        <Buttons
        save={save}
        cancel={cancel}
        remove={remove}
        />

        </form>
    );
}
