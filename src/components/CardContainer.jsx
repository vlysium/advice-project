import Card from "./Card";

function CardContainer({ onChange }) {
  const cards = [
    { index: 0, title: "Instagram", icon: "", onChange: onChange, ratio: 1.05 },
    { index: 1, title: "Twitter", icon: "", onChange: onChange, ratio: 0.6 },
    { index: 2, title: "Reddit", icon: "", onChange: onChange, ratio: 2.48 },
    { index: 3, title: "Twitch", icon: "", onChange: onChange, ratio: 0.55 },
    { index: 4, title: "Snapchat", icon: "", onChange: onChange, ratio: 0.87 },
    { index: 5, title: "Pinterest", icon: "", onChange: onChange, ratio: 1.3 },
    { index: 6, title: "LinkedIn", icon: "", onChange: onChange, ratio: 0.71 },
    { index: 7, title: "YouTube", icon: "", onChange: onChange, ratio: 0.46 },
    { index: 8, title: "Streaming", icon: "", onChange: onChange, ratio: 0.92 },
    { index: 9, title: "TikTok", icon: "", onChange: onChange, ratio: 0.63 },
    { index: 10, title: "Facebook", icon: "", onChange: onChange, ratio: 0.79 },
  ];

  const listItems = cards.map((card) => (
    <Card
      key={card.index}
      index={card.index}
      title={card.title}
      icon={card.icon}
      onChange={card.onChange}
      ratio={card.ratio}
    />
  ));

  return <article id="card-container">{listItems}</article>;
}

export default CardContainer;
