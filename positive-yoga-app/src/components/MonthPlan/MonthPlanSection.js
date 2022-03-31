import MonthPlan from "./MonthPlan";
const MonthPlanSection = () => {
  const monthPlanData = [
    {
      month: 6,
      discount: 50,
      price: 9.99,
      fullprice: 119.94,
      afterdiscount: 59.94,
    },
    {
      month: 3,
      discount: null,
      price: 14.99,
      fullprice: 59.97,
      afterdiscount: 44.97,
    },
    {
      month: 1,
      discount: null,
      price: 19.99,
      fullprice: null,
      afterdiscount: null,
    },
  ];
  return (
    <div>
      {monthPlanData.map((plan, i) => {
        {
          console.log(plan.afterdiscount);
        }
        return (
          <MonthPlan
            key={i}
            month={plan.month}
            price={plan.price}
            priceWithoutDiscount={plan.fullprice}
            priceWithDiscount={plan.afterdiscount}
            discount={plan.discount}
          />
        );
      })}
    </div>
  );
};

export default MonthPlanSection;
