import AdvertismenPart from "./AdverstismentPart";
import CheckList from "../../assets/CheckList.svg";
import GuideBook from "../../assets/GuideBook.svg";
import Watch from "../../assets/Watch.svg";
import Whistle from "../../assets/Whistle.svg";
import Sneakers from "../../assets/Sneakers.svg";
import Streching from "../../assets/StrechingExercise.svg";
import HealthyFood from "../../assets/HealthyFood.svg";

const AdvertismentSection = () => {
  return (
    <div className="main-container">
      <AdvertismenPart
        svg={CheckList}
        imgText="Focus on your goals"
        headline={"A personalized yoga program"}
        text={"Completely safe and focused on your key goals"}
      />
      <AdvertismenPart
        svg={Streching}
        imgText="yoga yoga yoga"
        headline={"Easy & enjoyable yoga workouts for your level"}
        text={"Program adjusts to your level and pace"}
      />
      <AdvertismenPart
        svg={Sneakers}
        imgText="Focus on your goals"
        headline={"No special preparation needed"}
        text={
          "Perfect for begginners! Requires no special preparation or equipment"
        }
      />
      <AdvertismenPart
        svg={HealthyFood}
        imgText="Focus on your goals"
        headline={"Daily motivation & accountability"}
        text={
          "Track your progress, develop a healthy routine, reach goals faster"
        }
      />
      <AdvertismenPart
        svg={Whistle}
        imgText="Focus on your goals"
        headline={"Browse from various yoga challenges"}
        text={
          "30 d morning yoga, mindful yoga, back flexibility challenge, and more!"
        }
      />
      <AdvertismenPart
        svg={Watch}
        imgText="Focus on your goals"
        headline={"Easy access on any device"}
        text={"Do your yoga anywhere across all types of devices"}
      />
      <AdvertismenPart
        svg={GuideBook}
        imgText="Focus on your goals"
        headline={"A complete guide to get started"}
        text={
          "Best tips, guidelines, advice, and recommendations for successful practice"
        }
      />
    </div>
  );
};

export default AdvertismentSection;
