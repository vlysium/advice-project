function Card(props) {
  return (
    <div className="converter-card">
      <h3>{props.title}</h3>
      <input type="number" min="0" placeholder="Input minutes" />
    </div>
  );
}

export default Card;
