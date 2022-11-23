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

  
  return (
    <div>
      <h4>{title}</h4>

      
      <p>
        {Math.round(dynamicValue * ratio * 100) / 100} {displayedValue()} a {time}
      </p>
    </div>
  );
}

export default Usage;
