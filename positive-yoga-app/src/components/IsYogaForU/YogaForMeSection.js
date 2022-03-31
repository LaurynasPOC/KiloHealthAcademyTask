import IsYogaForMePart from "./IsYogaForMePart";
import "./YogaForMeSection.scss";
const YogaForMeSection = () => {
  return (
    <div className="yoga-for-u-section">
      <IsYogaForMePart
        text={"Each program adapts to your age or fitness level"}
      />
      <IsYogaForMePart text={"Mindful way to exercise and get real results"} />
      <IsYogaForMePart text={"Effective and long-term lasting results"} />
      <IsYogaForMePart
        text={"Suited activities that benefit both the mind and body"}
      />
      <IsYogaForMePart text={"Low-intensity but highly-effective workouts"} />
      <IsYogaForMePart
        text={"Extra attention to muscle, joint and back health"}
      />
    </div>
  );
};

export default YogaForMeSection;
