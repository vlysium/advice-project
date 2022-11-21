import Card from "./Card";

function CardContainer({ onChange }) {
  return (
    <article id="card-container">
      <Card index="0" title="TikTok" icon="" onChange={onChange} />
      <Card index="1" title="Reddit" icon="" onChange={onChange} />
      <Card index="2" title="Pinterest" icon="" onChange={onChange} />
      <Card index="3" title="Instagram" icon="" onChange={onChange} />
      <Card index="4" title="Snapchat" icon="" onChange={onChange} />
      <Card index="5" title="Facebook" icon="" onChange={onChange} />
      <Card index="6" title="LinkedIn" icon="" onChange={onChange} />
      <Card index="7" title="Twitter" icon="" onChange={onChange} />
      <Card index="8" title="Twitch" icon="" onChange={onChange} />
      <Card index="9" title="YouTube" icon="" onChange={onChange} />
      <Card index="11" title="Streaming" icon="" onChange={onChange} />
    </article>
  );
}

export default CardContainer;
