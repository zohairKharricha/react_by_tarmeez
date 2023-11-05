let name = "Kronos";
export default function MyButton() {
  return (
    <div>
      <button onClick={buttonClicked}>Click Me!</button>
      <h1>{name}</h1>
    </div>
  );
}

function buttonClicked() {
  name = "Zohair";
}
