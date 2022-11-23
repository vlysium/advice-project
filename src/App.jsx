import { useState } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [CO2, setCO2] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [CO2Total, setCO2Total] = useState(0);
  const [visualization, setVisualization] = useState("power");
  const [dynamicValue, setDynamicValue] = useState("");

  function onChange(value, index) {
    /*
    console.log("value:", value);
    console.log("index:", index);
    */

    // update number
    const newState = CO2.map((c, i) => {
      if (i === index) {
        return value;
      }
      return c;
    });
    setCO2(newState);

    // sum all numbers
    setCO2Total(Math.round(newState.reduce((a, b) => a + b, 0) * 100) / 100);
  }

  function onCalculate() {
    displayValue(visualization);
  }

  function convertCO2TokWh(value) {
    return Math.round(value * 0.0076 * 100) / 100;
  }

  function convertCO2ToCigarettes(value) {
    return Math.round(value * 0.0714 * 100) / 100;
  }

  function convertCO2ToCupsOfCoffee(value) {
    return Math.round(value * 0.0076 * 100) / 100;
  }

  function displayValue(value) {
    switch (value) {
      case "power":
        setDynamicValue(convertCO2TokWh(CO2Total));
        break;

      case "cigarettes":
        setDynamicValue(convertCO2ToCigarettes(CO2Total));
        break;

      case "coffeecups":
        setDynamicValue(convertCO2ToCupsOfCoffee(CO2Total));
        break;
    }
  }

  return (
    <div className="App">
      <Header />
      <Converter onChange={onChange} onCalculate={onCalculate} />
      <Results
        CO2Total={CO2Total}
        dynamicValue={dynamicValue}
        onUpdate={displayValue}
        unit={visualization}
        setVisualization={setVisualization}
      />
      <Footer />
    </div>
  );
}

export default App;
