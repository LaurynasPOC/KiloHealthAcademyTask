import Star from "../../assets/Star.svg";
import "./Card.scss";

const Card = ({ name, adress, picture, review }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h5>{name}</h5>
        <p>{adress}</p>
      </div>
      <div className="stars">
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
      </div>
      <div className="card-body">
        <img src={picture} alt="I love Yoga" />
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Card;
