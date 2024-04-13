import "./Text.css";

export const Text = ({ classes, text, color }) => {
  return (
    <p style={{ color: color }} className={`${classes}`}>
      {text}
    </p>
  );
};
