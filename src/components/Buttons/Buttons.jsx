import "./Buttons.css";

export const Button = ({ variant, size, disabled, onClickHandler, text }) => {
  return (
    <button
      onClick={onClickHandler}
      disabled={disabled}
      className={`button ${variant}-button ${size}-button`}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  variant: "simple",
  size: "sm",
  disabled: false,
  onClickHandler: () => {},
  text: "Submit",
}