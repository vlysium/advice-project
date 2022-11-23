import "../styles/Converter.scss";

import CardContainer from "./CardContainer";

function Converter({ onChange, onCalculate }) {
  return (
    <section id="converter" className="max-width">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sit? Illum iure repellendus repellat alias
        ab itaque exercitationem quia culpa.
      </p>
      <CardContainer onChange={onChange} />
      <button onClick={onCalculate}>Calculate my CO2 footprint</button>
    </section>
  );
}

export default Converter;
