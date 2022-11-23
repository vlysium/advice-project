function Usage({ title, myClassName, time, dynamicValue, ratio, unit }) {
  function displayedValue() {
    switch (unit) {
      case "power":
        return " kWh";

      case "cigarettes":
        return " cigarettes";

      case "coffeecups":
        return " cups of coffee";
    }
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
    <div>
      <h4>{title}</h4>

      <img src={"src/assets/icons/" + image()} className={myClassName} alt={unit}></img>
      <p>
        {Math.round(dynamicValue * ratio * 100) / 100} {displayedValue()} a {time}
      </p>
    </div>
  );
}

export default Usage;
