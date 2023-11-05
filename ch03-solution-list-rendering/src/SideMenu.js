import TagButton from "./TagButton";
function SideMenu({children}) {
  const categories = [
    {
      id: 1,
      title: "last aticles",
      c: (
        <div>
          <span>&#9760; &#9760; &#9760;</span>
        </div>
      ),
    },
    {
      id: 2,
      title: "test",
      c: (
        <img
          style={{
            maxWidth: "100%",
          }}
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
        />
      ),
    },
    {
      id: 3,
      title: "sheeeeeeeesh",
      c: (
        <>
          <h1>Click Me</h1>
          <span>👍👍</span>
        </>
      ),
    },
  ];
  const categoriesList = categories.map((cat) => {
    return (
      <TagButton key={cat.id} title={cat.title}>
        {cat.c}
      </TagButton>
    );
  });
  return (
    <div
      style={{
        margin: "25px",
        border: "5px solid teal",
      }}
    >
      {categoriesList}
      {/* <TagButton title="last aticles">
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
      </TagButton> */}
    </div>
  );
}
export default SideMenu;
