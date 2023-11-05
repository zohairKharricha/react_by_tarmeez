export default function MyButtonComp() {
  const btnStyle = {
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "10px",
    width: "40%",
    border: "none",
    boxShadow: "0 2px 8px #000",
    marginTop: "10px",
  };
  return <button style={btnStyle}>Tag Button</button>;
}
