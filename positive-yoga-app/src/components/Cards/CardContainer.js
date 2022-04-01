import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";

import Card from "./Card";
import { cardInfo } from "../../data";

import "./CardContainer.scss";

const CardContainer = () => {
  //Review card mobile version logic with react elastic carousel

  const settings = [{ width: 1, itemToShow: 1 }];

  return (
    <div className="card-info-container">
      <ReactElasticCarousel
        breakPoints={settings}
        showArrows={false}
        enableMouseSwipe={true}
      >
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
      </ReactElasticCarousel>
    </div>
  );
};

export default CardContainer;
