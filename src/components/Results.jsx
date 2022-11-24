import { useState, useEffect, useRef } from "react";
import "../styles/Results.scss";
import DropDown from "./DropDown";
import Usage from "./Usage";
import TreesPlanted from "./TreesPlanted";

function Results({ CO2Total, dynamicValue, onUpdate, setVisualization, unit }) {
  const [kWh, setkWh] = useState(0);
  const [startAni, setStartAni] = useState(true);
  const hiddenRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    if (window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop) setStartAni(!true);
  };

  function onChange(event) {
    setVisualization(event.target.value);
    onUpdate(event.target.value);
  }
  function image() {
    switch (unit) {
      case "power":
        return "light-bulb.svg";

      case "cigarettes":
        return "cig.svg";

      case "coffeecups":
        return "coffee.svg";
    }
  }

  return (
    <section id="results">
      <div className="visuel-results">
        <div className="result-text">
          <h2>
            Your CO<sub>2</sub> footprint is {CO2Total} g CO<sub>2</sub>eq, which is equivalent to:
          </h2>
        </div>
        <div className="visuel max-width">
          <DropDown onChange={onChange} />
          <img src={"./assets/icons/" + image()} /* className={myClassName} */ alt={unit}></img>
          <Usage title="Daily" myClassName="daily" time="day" dynamicValue={dynamicValue} ratio="1" unit={unit} />
          <Usage
            title="Monthly"
            myClassName="monthly"
            time="month"
            dynamicValue={dynamicValue}
            ratio="30.42"
            unit={unit}
          />
          <Usage
            title="Yearly"
            myClassName="yearly"
            time="year"
            dynamicValue={dynamicValue}
            ratio="365.25"
            unit={unit}
          />
        </div>
      </div>
      <div className="tree-grid max-width">
        <article className="tree-text">
          <h4>
            To offset your CO<sub>2</sub> emissions, you would have to plant the following number of trees:
          </h4>
          <TreesPlanted title="Daily" ratio="1" CO2Total={CO2Total} />
          <TreesPlanted title="Monthly" ratio="30.42" CO2Total={CO2Total} />
          <TreesPlanted title="Yearly" ratio="365.25" CO2Total={CO2Total} />
        </article>
        <div className="tree-svg" ref={hiddenRef}>
          {startAni ? (
            "2"
          ) : (
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_wis6xp3y.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              autoplay
            ></lottie-player>
          )}
        </div>
      </div>
    </section>
  );
}

export default Results;
