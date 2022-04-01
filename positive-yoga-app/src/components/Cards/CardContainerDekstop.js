import Card from "./Card";
import { cardInfo } from "../../data";

import "./CardContainer.scss";

const CardContainerDekstop = () => {
  return (
    <div className="card-info-container">
      {cardInfo.map((card, i) => {
        return (
          <Card
            key={i}
            name={card.name}
            adress={card.adress}
            picture={card.profilePic}
            review={card.review}
          />
        );
      })}
    </div>
  );
};

export default CardContainerDekstop;
