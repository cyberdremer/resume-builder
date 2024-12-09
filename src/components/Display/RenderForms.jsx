import CreateButton from "../../Buttons/CreateButton.jsx";
import Dropdown from "../Dropdown/Dropdown";

export default function RenderForms({ array, onClick, onChange, formType, isActive, remove, onAdd}) {
  return (
    isActive && <div className="forms-container">
      {array.map((element) => (
        <Dropdown
        formType={formType}
        onChange={onChange}
          element={element}
          elementName={element.name}
          onClick={onClick}
          key={element.id}
          remove={remove}
          id={element.id}
        ></Dropdown>
      ))}
      <CreateButton onClick={onAdd}></CreateButton>
    </div>
  );
}
