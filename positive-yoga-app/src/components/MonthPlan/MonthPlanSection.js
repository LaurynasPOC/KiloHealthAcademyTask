import MonthPlan from "./MonthPlan";
import { monthPlanData } from "../../data";
const MonthPlanSection = () => {
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
