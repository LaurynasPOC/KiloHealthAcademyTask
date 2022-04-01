import IsYogaForMePart from "./IsYogaForMePart";
import "./YogaForMeSection.scss";
import { YogaForMeData } from "../../data";
const YogaForMeSection = () => {
  return (
    <div className="yoga-for-u-section">
      {YogaForMeData.map((data, i) => {
        return <IsYogaForMePart key={i} text={data.text} />;
      })}
    </div>
  );
};

export default YogaForMeSection;
