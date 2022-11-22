import { useState } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [CO2, setCO2] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [CO2Total, setCO2Total] = useState(0);
  const [visualization, setVisualization] = useState("power");
  const [dynamicText, setDynamicText] = useState("");

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
    setCO2Total(newState.reduce((a, b) => a + b, 0) / 1000);
  }

  function onCalculate() {
    displayText(visualization);
  }

  function convertCO2TokWh(value) {
    return (value * 0.0076).toFixed(2);
  }

  function convertCO2ToCigarettes(value) {
    return Math.ceil(value * 0.0714);
  }

  function convertCO2ToCupsOfCoffee(value) {
    return (value * 0.0076).toFixed(2);
  }

  function displayText(value) {
    switch (value) {
      case "power":
        setDynamicText(
          "Your CO2 footprint is approximately " +
            CO2Total +
            "g CO2eq, which is equivalent to " +
            convertCO2TokWh(CO2Total) +
            " kWh."
        );
        break;

      case "cigarettes":
        setDynamicText(
          "Your CO2 footprint is approximately " +
            CO2Total +
            "g CO2eq, which is equivalent to " +
            convertCO2ToCigarettes(CO2Total) +
            " cigarettes smoked."
        );
        break;

      case "coffeecups":
        setDynamicText(
          "Your CO2 footprint is approximately " +
            CO2Total +
            "g CO2eq, which is equivalent to " +
            convertCO2ToCupsOfCoffee(CO2Total) +
            " cups of coffee."
        );
        break;
    }
  }

  return (
    <div className="App">
      <Header />
      <Converter onChange={onChange} onCalculate={onCalculate} />
      <Results
        CO2Total={CO2Total}
        dynamicText={dynamicText}
        onUpdate={displayText}
        setVisualization={setVisualization}
      />
      <Footer />
    </div>
  );
}

export default App;
