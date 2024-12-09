
import '../styles/Dropdown/Dropdown.css'

export default function CreateButton({onClick}){
    return (<>
    <button className = "dropdown-button"onClick={onClick}>Add</button>
    </>);

}