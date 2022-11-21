import "../styles/results.scss";

function Results() {
  return (
    <section id="results" className="max-width">
      <div className="visuel-results">
        <div className="result-text">
          <h2>Dette er en overskrift</h2>
          <select name="visualisering" id="visualisering">
            <option value="power" defaultValue>
              Power
            </option>
            <option value="cigarettes">Cigarettes</option>
            <option value="coffeecups">Cups of coffee</option>
          </select>
        </div>
        <div className="visuel">
          <div>
            <h4>Daily</h4>
            <div className="daily"></div>
          </div>
          <div>
            <h4>Monthly</h4>
            <div className="monthly"></div>
          </div>
          <div>
            <h4>Yearly</h4>
            <div className="yearly"></div>
          </div>
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
