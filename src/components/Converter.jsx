import "../styles/Converter.scss";

import CardContainer from "./CardContainer";

function Converter({ onChange, onCalculate }) {
  return (
    <section id="converter" className="max-width">
      <h2>
        What is my CO<sub>2</sub> footprint?
      </h2>
      <p>
        Input the amount of time you spend each day on each platform and social medias to calculate your CO<sub>2</sub>{" "}
        footprint.
      </p>
      <CardContainer onChange={onChange} />
      <a className="btn" href="#results" onClick={onCalculate}>
        Calculate my CO<sub>2</sub> footprint
      </a>
    </section>
  );
}

export default Converter;
