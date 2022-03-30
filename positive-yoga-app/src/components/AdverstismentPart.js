import "./AdvertismentPart.scss";

const AdvertismenPart = ({ svg, imgText, headline, text }) => {
  return (
    <div className="container">
      <img src={svg} alt={imgText} />
      <div>
        <h5>{headline}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AdvertismenPart;
