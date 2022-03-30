import React, { useState } from "react";
import TickBox from "../assets/TickBox.svg";
import Empty from "../assets/EmptyTickBox.svg";
import "./MonthPlan.scss";
const MonthPlan = ({
  month,
  price,
  priceWithoutDiscount,
  priceWithDiscount,
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={"plan-container"}
      style={
        selected
          ? { border: "2px solid #ff9b4e" }
          : { border: "2px solid rgba(0, 0, 0, 0.08)" }
      }
    >
      <div className="plan-container__top">
        <h5>{month} month plan </h5>
        <p> Save 50%</p>
      </div>
      <div className="plan-container__mid">
        <h2>
          ${price}
          <span>/ month</span>
        </h2>
        {selected ? (
          <img src={TickBox} alt="Order Yoga plan" />
        ) : (
          <img src={Empty} alt="Order Yoga plan" />
        )}
      </div>
      <div className="plan-container__bot">
        {priceWithoutDiscount && (
          <p>
            <span>${priceWithoutDiscount} </span>
            <span>${priceWithDiscount} </span> biled every {month} months
          </p>
        )}
        {!priceWithoutDiscount && <p>Billed monthly</p>}
      </div>
    </div>
  );
};

export default MonthPlan;
