function DropDown({ onChange }) {
  const options = [
    { value: "power", label: "Power" },
    { value: "cigarettes", label: "Cigarettes" },
    { value: "coffeecups", label: "Cups of coffee" },
  ];

  return (
    <select name="visualisering" id="visualisering" onInput={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
