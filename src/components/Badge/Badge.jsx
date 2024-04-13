import "./Badge.css";
export const Badge = ({ text, size, color }) => {
  return (
    <span className={`badge ${color}-badge ${size}-badge`}>
      {text.toUpperCase()}
    </span>
  );
};

Badge.defaultProps = {
  text: "default",
  size: "sm",
  color: "default",
};
