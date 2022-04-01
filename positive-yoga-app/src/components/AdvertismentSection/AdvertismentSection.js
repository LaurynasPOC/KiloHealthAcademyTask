import AdvertismenPart from "./AdverstismentPart";
import { advertismentData } from "../../data";

const AdvertismentSection = () => {
  //Whats is in my program section logic
  return (
    <div className="main-container">
      {advertismentData.map((adv, i) => {
        return (
          <AdvertismenPart
            key={i}
            svg={adv.svg}
            imgText={adv.imgText}
            headline={adv.headline}
            text={adv.text}
          />
        );
      })}
    </div>
  );
};

export default AdvertismentSection;
