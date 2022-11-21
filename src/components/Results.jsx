function Results() {
  return (
    <section id="results" className="max-width">
      <h2>Dette er en overskrift</h2>
      <select name="visualisering" id="visualisering">
        <option value="power"></option>
        <option value="cigarettes"></option>
        <option value="coffeecups"></option>
      </select>
      <div>
        <h4>Daily</h4>
        <div className="daily"></div>
        <h4>Monthly</h4>
        <div className="monthly"></div>
        <h4>Yearly</h4>
        <div className="yearly"></div>
        <div className="trees"></div>
      </div>
      <div>
        <p>For at udligne dit forburg af co2 skal du plante følgende antal træer: </p>
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
