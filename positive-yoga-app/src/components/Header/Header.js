import React from "react";

import Countdown from "react-countdown";
import DisCountSticker from "../../assets/DiscountSticker.svg";
import YogaLogo from "../../assets/PositiveYogaLogo.svg";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <img
          className="header-top__img"
          src={DisCountSticker}
          alt="Yoga discount"
        />
        <p className="header-top__p">
          <span>50%</span> discount only valid for{" "}
          <span>
            <Countdown daysInHours={true} date={Date.now() + 1051000} />
          </span>
        </p>
      </div>
      <div className="header-bot">
        <img src={YogaLogo} alt="Positive Yoga Logo" />
      </div>
    </div>
  );
};

export default Header;
