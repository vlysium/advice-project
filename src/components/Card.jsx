function Card(props) {
  return (
    <div className="converter-card">
      <h3>{props.title}</h3>
      <input type="text" placeholder="Input minutes" />
    </div>
  );
}

export default Card;
