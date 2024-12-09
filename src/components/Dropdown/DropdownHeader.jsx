import '../../styles/Dropdown/DropdownHeader.css'

export default function DropdownHeader({elementName, onClick, icon, isActive}){
    return(<>
    <button className="expand-section" onClick={onClick}>
        <h2 className="expand-section-header">{elementName}</h2>
               
    </button>

    </>);
    
}