import { useState } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";
import Results from "./components/Results";

function App() {
  const [minutes, setMinutes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [CO2, setCO2] = useState(0);
  const [kWh, setkWh] = useState(0);

  function onChange(value, index) {
    console.log("value:", value);
    console.log("index:", index);

    const newState = minutes.map((obj) => {
      if (obj === index) {
        return value;
      }

      return obj;
    });

    setMinutes(newState);
  }

  function onCalculate() {
    console.log(minutes.reduce((a, b) => a + b, 0));
  }

  function convertCO2tokWh(value) {
    return value * 0.0076;
  }

  return (
    <div className="App">
      <Header />
      <Converter onChange={onChange} onCalculate={onCalculate} />
      <Results />
    </div>
  );
}

export default App;
