import { useState } from "react";

import "../styles/Results.scss";
import DropDown from "./DropDown";
import Usage from "./Usage";

function Results({ CO2Total, dynamicText, onUpdate, setVisualization }) {
  const [kWh, setkWh] = useState(0);

  function onChange(event) {
    setVisualization(event.target.value);
    onUpdate(event.target.value);
  }

  return (
    <section id="results" className="max-width">
      <div className="visuel-results">
        <div className="result-text">
          <h2>Dette er en overskrift</h2>
          <DropDown onChange={onChange} />
          <p>{dynamicText}</p>
        </div>
        <div className="visuel">
          <Usage title="Daily" myClassName="daily" />
          <Usage title="Monthly" myClassName="monthly" />
          <Usage title="Yearly" myClassName="yearly" />
        </div>
      </div>
      <div>
        <p>For at udligne dit co2 udledning skal du plante følgende antal træer: </p>
        <p>Dagligt:</p>
        <p>Månedligt:</p>
        <p>Årligt:</p>
        <div>
          <img src="" alt="svg med træer" />
        </div>
      </div>
    </section>
  );
}

export default Results;
