export default function MyComponent({currentInputs, handleChange, value}) {
  return (
    <>
      <label>Phone Number:</label>
      <input
        type="number"
        value={value}
        onChange={(event) => {
          handleChange({...currentInputs, phoneNumber: event.target.value});
        }}
      />
    </>
  );
}
