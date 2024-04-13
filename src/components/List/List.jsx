import "./List.css";

export const ListItem = ({ children }) => {
//   console.log(children, "children");
  return <li>{children}</li>;
};

export const List = ({ children, type }) => {
//   console.log("List", children);
  return (
    <>
      {type === "ordered" && <ol>{children}</ol>}
      {type === "unordered" && <ul>{children}</ul>}
      {type === "no-bullet" && (
        <div style={{ listStyleType: "none" }}>{children}</div>
      )}
    </>
  );
};

List.defaultProps = {
  type: "ordered",
};
