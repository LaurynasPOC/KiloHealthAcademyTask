import "./HeadLine.scss";

const Headline = ({ text, textS }) => {
  return (
    <div className="head-line">
      {text && <h1>{text}</h1>}

      {!text && <h3>{textS}</h3>}
    </div>
  );
};

export default Headline;
