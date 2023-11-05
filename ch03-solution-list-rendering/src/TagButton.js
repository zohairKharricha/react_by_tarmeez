import "./TagButtonStyle.css";
function TagButton({title, children}) {
  return (
    <button className={"tagButton"}>
      {title}
      {children}
    </button>
  );
}
export default TagButton;
