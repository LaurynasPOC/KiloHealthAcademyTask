import React, { useState } from "react";
import "./QuestionPart.scss";
import Up from "../../assets/ExpandLess.svg";
import Down from "../../assets/ExpandMore.svg";

const QuestionPart = ({ headline, text }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className="question-part-container"
      onClick={() => setSelected(!selected)}
    >
      <div>
        <h5>{headline}</h5>
        {selected ? <img src={Up} /> : <img src={Down} />}
      </div>
      {selected && <p>{text}</p>}
    </div>
  );
};

export default QuestionPart;
