
import InputGroup from "./InputGroup.jsx";
import "../styles/InputStyling/StartEndDate.css"

export default function StartDateEndDate({startDate, endDate, onChange}){
    return(
        <div className="date-container">
            <InputGroup
            inputType="date"
            id="start-date"
            labelText="Start Date"
            placeholder="Enter Start Date"
            value={startDate}
            onChange={onChange}
            data-key="start-date"
            />
            <InputGroup
            inputType="date"
            id="end-date"
            labelText="End Date"
            placeholder="Enter End Date"
            value={endDate}
            onChange={onChange}
            data-key="end-date"
            />
        </div>
    );

}