import "./TagButtonStyle.css";
function TagButton({title, children}) {
  return (
    <div>
      {title == null || title == "" ? null : (
        <button className={"tagButton"}>
          {title}
          {children}
        </button>
      )}
    </div>
  );
}
export default TagButton;
