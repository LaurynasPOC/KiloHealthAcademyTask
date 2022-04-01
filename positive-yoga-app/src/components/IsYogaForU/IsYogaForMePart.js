import "./IsYogaForMePart.scss";
import CheckCircle from "../../assets/CheckCirckle.svg";

const IsYogaForMePart = ({ text }) => {
  //is positive yoga for me part logic
  return (
    <div className="yoga-for-you-container">
      <img src={CheckCircle} alt="Yoga for U!" />
      <p>{text}</p>
    </div>
  );
};

export default IsYogaForMePart;
