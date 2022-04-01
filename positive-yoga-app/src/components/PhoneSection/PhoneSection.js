import Phone1 from "../../assets/Phone1.jpg";
import Phone2 from "../../assets/Phone2.jpg";

import "./PhoneSection.scss";
const PhoneSection = () => {
  return (
    <div className="mobile-container">
      <img src={Phone2} alt="yoga everythere" />
      <div className="mobile-section-bg"></div>

      <img src={Phone1} alt="i need yoga" />
    </div>
  );
};

export default PhoneSection;
