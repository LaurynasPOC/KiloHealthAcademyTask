import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";

import Card from "./Card";
import Emily from "../../assets/Emily.jpg";
import Jesica from "../../assets/Jesica.jpg";
import Kylie from "../../assets/Kylie.jpg";
import "./CardContainer.scss";

const CardContainer = () => {
  const settings = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2 },
    { width: 768, itemToShow: 3 },
  ];
  const cardInfo = [
    {
      name: "Emily, 28",
      adress: "Delaware, NJ",
      profilePic: Emily,
      review:
        "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
    },
    {
      name: "Kylie, 28",
      adress: "Los Angeles",
      profilePic: Kylie,
      review:
        "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
    },
    {
      name: "Jesica, 51",
      adress: "San Francisco, CA",
      profilePic: Jesica,
      review:
        "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
    },
  ];
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
