import TagButton from "./TagButton";
function SideMenu({children}) {
  return (
    <div
      style={{
        margin: "25px",
        border: "5px solid teal",
      }}
    >
      <TagButton title="last aticles">
        <div>
          <span>&#9760; &#9760; &#9760;</span>
        </div>
      </TagButton>
      <TagButton title="test">
        <img
          style={{
            maxWidth: "100%",
          }}
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
        />
      </TagButton>
      <TagButton title="sheeeeeeeesh">
        <h1>Click Me</h1>
        <span>👍👍</span>
      </TagButton>
      <TagButton />
    </div>
  );
}
export default SideMenu;
