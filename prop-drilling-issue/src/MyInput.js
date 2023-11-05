export default function MyInput({value, handleChange, inputName}) {
  return (
    <>
      <label>{inputName}</label>
      <input
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </>
  );
}
