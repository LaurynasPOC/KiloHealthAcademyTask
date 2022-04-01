import "./AdvertismentPart.scss";

const AdvertismenPart = ({ svg, imgText, headline, text }) => {
  //What is in my program one part logic
  return (
    <div className="advertisment-container">
      <img src={svg} alt={imgText} />
      <div>
        <h5>{headline}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AdvertismenPart;
