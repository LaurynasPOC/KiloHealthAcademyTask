import DisCountSticker from "../assets/DiscountSticker.svg";
import YogaLogo from "../assets/PositiveYogaLogo.svg";
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
          <span>50%</span> discount only valid for <span>00:15:49</span>
        </p>
      </div>
      <div className="header-mid">
        <img src={YogaLogo} alt="Positive Yoga Logo" />
      </div>
      <p className="header-bottom">
        Over <strong> 52 147</strong> plans ordered.
      </p>
    </div>
  );
};

export default Header;
