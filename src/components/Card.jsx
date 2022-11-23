import { useState, useRef } from "react";

function Card({ title, icon, onChange, index, ratio }) {
  const input = useRef(null);

  function convertMinutesToCO2(value) {
    // check if the input is empty
    if (value !== "") {
      return Math.round(ratio * value * 100) / 100;
    }
    return 0;
  }

  return (
    <div className="converter-card">
      <img src={"src/assets/icons/" + icon} alt={title + " icon"} />
      <h3>{title}</h3>
      <input
        type="number"
        min="0"
        placeholder="Input minutes"
        onBlur={() => onChange(convertMinutesToCO2(input.current.value), index)}
        ratio={ratio}
        ref={input}
      />
    </div>
  );
}

export default Card;
