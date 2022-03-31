import "./HeadLine.scss";

const Headline = ({ text, textS, textM }) => {
  return (
    <div className="head-line">
      {text && <h1>{text}</h1>}

      {!text && <h3>{textS}</h3>}
      {!textS && <h2>{textM}</h2>}
    </div>
  );
};

export default Headline;
