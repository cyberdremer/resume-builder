import "../styles/InputStyling/InputGroup.css";

export default function InputGroup({
  id,
  labelText,
  placeholder,
  inputType,
  onChange,
  value,
  required,
  errorMessage,
  "data-key": dataKey,
}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        <span className="label-text">{labelText + ": "}</span>
        {required ? (
          <span className="required-text">Required</span>
        ) : (
          <span className="optional-text">Optional</span>
        )}
        <span className="error">{errorMessage}</span>
      </label>
      {inputType === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          type={inputType}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-key={dataKey}
        />
      )}
    </div>
  );
}
