export default function MyComponent({
  value,
  handleChange,
  inputName,
  inputType = "number",
}) {
  return (
    <>
      <label>{inputName}</label>
      <input
        type={inputType}
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </>
  );
}
