import "./Input.css";

export const Input = ({
  inputType,
  placeholder,
  variant,
  size,
  disabled,
  readOnly,
  callBack,
}) => {
  return (
    <div>
      <input
        disabled={disabled}
        readOnly={readOnly}
        type={inputType}
        placeholder={placeholder}
        className={`input ${variant}-input ${size}-input`}
        onKeyDown={callBack}
      />
    </div>
  );
};

Input.defaultProps = {
  inputType: "text",
  placeholder: "Enter text",
  variant: "simple",
  size: "sm",
  disabled: false,
  readOnly: false,
};
