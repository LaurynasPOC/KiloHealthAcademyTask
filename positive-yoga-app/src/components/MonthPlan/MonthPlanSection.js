import MonthPlan from "./MonthPlan";
import { monthPlanData } from "../../data";
const MonthPlanSection = () => {
  //month plan logic
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
