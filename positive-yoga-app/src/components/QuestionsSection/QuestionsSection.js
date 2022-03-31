import "./QuestionsSection.scss";
import QuestionPart from "./QuestionPart";

const QuestionsSection = () => {
  return (
    <div className="questions-main-container">
      <QuestionPart
        headline={"What happens after I order?"}
        text={
          "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "
        }
      />
      <QuestionPart
        headline={"Where I can access my plan?"}
        text={
          "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase."
        }
      />
      <QuestionPart
        headline={"How can I cancel my subscription?"}
        text={
          "You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app"
        }
      />
      <QuestionPart
        headline={"Why this program is paid?"}
        text={
          "We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! "
        }
      />
    </div>
  );
};

export default QuestionsSection;
