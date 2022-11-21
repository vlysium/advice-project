import { useState, useRef } from "react";

function Card({ title, icon, onChange, index }) {
  const input = useRef(null);

  return (
    <div className="converter-card">
      <h3>{title}</h3>
      <input
        type="number"
        min="0"
        placeholder="Input minutes"
        onBlur={() => onChange(parseInt(input.current.value, 10), index)}
        ref={input}
      />
    </div>
  );
}

export default Card;
