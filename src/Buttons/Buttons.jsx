import "../styles/InputStyling/Buttons.css"


export default function Buttons({remove, save, cancel}){

    return(
        <div className="button-container">
            <button className="remove-button" onClick={remove} type="button">Delete</button>
            <div className="main-buttons">
                <button className="cancel-button" onClick={cancel} type="button">Cancel</button>
                <button className="save-button" onClick={save} type="submit">Save</button>
            </div>
        </div>
    );
}