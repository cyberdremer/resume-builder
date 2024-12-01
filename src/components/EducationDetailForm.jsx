import InputGroup from "./InputGroup";
import "../styles/EducationDetails.css";
import Buttons from "./Buttons";
import StartDateToEndDate from "./StartDateToEndDate";

export default function EducationDetailForm() {
  return (
    <div className="education-details">
      <InputGroup nameOfInput="School" />
      <InputGroup nameOfInput="Degree" />
      <StartDateToEndDate/>
      <InputGroup nameOfInput="Location" required={false} />
      <Buttons/>
    </div>
  );
}
