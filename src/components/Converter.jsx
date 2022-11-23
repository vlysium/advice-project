import "../styles/Converter.scss";

import CardContainer from "./CardContainer";

function Converter({ onChange, onCalculate }) {
  return (
    <section id="converter" className="max-width">
      <h2>What is my CO2 footprint?</h2>
      <p>
        Input the amount of time you spend each day on each platform and social medias to calculate your CO2 footprint.
      </p>
      <CardContainer onChange={onChange} />
      <button onClick={onCalculate}>Calculate my CO2 footprint</button>
    </section>
  );
}

export default Converter;
