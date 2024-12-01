import '../styles/InputGroup.css'


export default function InputGroup({
  nameOfInput = "",
  value ="",
  required = true,
  placeHolder= "",
  errorMessage= "Default Error",
  inputID="",
  input = "input",
  inputType = "text"
}) {
  return (
    <div className="input-group">
      <label htmlFor={nameOfInput}>
        <span className="label-text">{nameOfInput + ": "}</span>
        {required ? (
          <span className="required-text">Required</span>
        ) : (
          <span className="optional-text">Optional</span>
        )}
        <span className="error">{errorMessage}</span>
      </label>
      {input === "textarea" ? (
        <textarea
          id={inputID}
          name={nameOfInput}
          placeholder={placeHolder}
          value={value}
        ></textarea>
      ) : (
        <input
          type={inputType}
          name={nameOfInput}
          id={inputID}
          placeholder={placeHolder}
          value={value}
        />
      )}
    </div>
  );
}
