import MyInput from "./MyInput";
export default function MyComponent({
  valueComponent,
  handleChangeComponent,
  inputNameComponent,
}) {
  return (
    <>
      <h1>This is the header of the component</h1>
      <MyInput
        inputName={inputNameComponent}
        value={valueComponent}
        handleChange={handleChangeComponent}
      />
      <h1>This is the footer of the component</h1>
    </>
  );
}
