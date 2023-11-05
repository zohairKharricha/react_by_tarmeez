import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

function App() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");
  const [devices, setDevices] = useState([
    "iphone",
    "mac",
    "samsung",
    "windows",
  ]);

  const devicesList = devices.map((device, i) => {
    return <li key={i}>{device}</li>;
  });
  function handleAddClick() {
    // const newDevices = [...devices];
    // newDevices.push(deviceNameInputValue);
    // setDevices(...devices);

    setDevices([...devices, deviceNameInputValue]);
  }
  return (
    <div className="App" style={{marginTop: "100px", fonstSize: "30px"}}>
      {devicesList}

      <div>
        <input
          value={deviceNameInputValue}
          onChange={(event) => setDeviceNameInputValue(event.target.value)}
          type="text"
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}

export default App;
