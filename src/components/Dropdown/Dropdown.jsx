
import { useState } from 'react';
import '../../styles/Dropdown/Dropdown.css'
import EducationForm from '../Education/EducationForm';
import ExperienceForm from '../Experience/ExperienceForm';

export default function Dropdown({element, onChange, elementName, id, formType, remove}) {
    const [formVisibility, setFormVisibility] = useState(false);

    function changeVisibility(){
        setFormVisibility(!formVisibility);
    }

    return(<>
    <button className="dropdown-button" onClick={changeVisibility} id={id}>{elementName}</button>
    {
        formVisibility && (formType === "education" ? (
            <EducationForm onChange={onChange} remove={remove} {...element}></EducationForm>
        ) :
        (
            <ExperienceForm onChange={onChange} remove={remove}{...element}></ExperienceForm>
        ))
    }
    
    </>);
}
