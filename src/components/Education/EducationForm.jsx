import InputGroup from "../InputGroup";
import Buttons from "../../Buttons/Buttons";
import StartDateEndDate from "../StartEndDateComponent";

export default function EducationForm({
  schoolName = "",
  schoolLocation = "",
  degree = "",
  major = "",
  startDate= "",
  endDate = "",
  id = "",
  onChange = "",
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
        placeholder="Enter school name..."
        value={schoolName}
        onChange={onChange}
        data-key="school-name"
        />

        <InputGroup
        inputType="text"
        id="school-location"
        labelText="School Location"
        placeholder="Enter school location"
        value={schoolLocation}
        onChange={onChange}
        data-key="school-location"
        />

        <InputGroup
        inputType="text"
        id="degree-name"
        labelText="Degree"
        placeholder="Enter degree"
        value={degree}
        onChange={onChange}
        data-key="degree-name"
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
