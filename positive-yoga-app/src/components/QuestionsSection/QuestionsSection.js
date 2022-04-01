import "./QuestionsSection.scss";
import QuestionPart from "./QuestionPart";
import { questionsData } from "../../data";

const QuestionsSection = () => {
  //questions section logic
  return (
    <div className="questions-main-container">
      {questionsData.map((ques, i) => {
        return (
          <QuestionPart key={i} headline={ques.headline} text={ques.text} />
        );
      })}
    </div>
  );
};

export default QuestionsSection;
