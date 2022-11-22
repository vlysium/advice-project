import { useState } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [CO2, setCO2] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [kWh, setkWh] = useState(0);

  function onChange(value, index) {
    /*
    console.log("value:", value);
    console.log("index:", index);
    */

    const newState = CO2.map((c, i) => {
      if (i === index) {
        return value;
      }
      return c;
    });
    setCO2(newState);
  }

  function onCalculate() {
    console.log(CO2.reduce((a, b) => a + b, 0));
  }

  function convertCO2tokWh(value) {
    return value * 0.0076;
  }

  return (
    <div className="App">
      <Header />
      <Converter onChange={onChange} onCalculate={onCalculate} />
      <Results />
      <Footer/>
    </div>
  );
}

export default App;
