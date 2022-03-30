import "./HeadLine.scss";

const Headline = ({ text }) => {
  return (
    <div className="head-line">
      <h1>{text}</h1>
    </div>
  );
};

export default Headline;
