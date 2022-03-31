import Header from "../components/Header/Header";
import Headline from "../components/HeadLine/HeadLine";
import MonthPlan from "../components/MonthPlan/MonthPlan";
import MonthPlanHeadline from "../components/MonthPlan/MonthPlanHeadline";
import Button from "../components/Button/Button";
import PaymentSection from "../components/PaymentSection/PaymentSection";
import AdvertismentSection from "../components/AdvertismentSection/AdvertismentSection";
import YogaForMeSection from "../components/IsYogaForU/YogaForMeSection";
import PhoneSection from "../components/PhoneSection/PhoneSection";
import QuestionsSection from "../components/QuestionsSection/QuestionsSection";
import "./FrontPage.scss";

const FrontPage = () => {
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
      fullprice: 1,
      afterdiscount: 1,
    },
  ];
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="body-container">
        <Headline text={"Get access to your yoga program now!"} />
        <MonthPlanHeadline />
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

        <Button text={"Get your plan"} />
        <PaymentSection />
        <Headline textS={"What is my program?"} />
        <AdvertismentSection />
        <Headline textS={"Hear success stories from our clients"} />
        <Button text={"Get my plan"} />
        <Headline textS={"Is Positive Yoga right for me?"} />
        <YogaForMeSection />
        <Headline textS={"Start your Yoga journey now!"} />
        <PhoneSection />
        <Headline textS={"Frequently Asked Questions"} />
        <QuestionsSection />
        <Button text={"Get your plan"} />
        <Headline textS={"Start your yoga program today!"} />
      </div>
    </div>
  );
};

export default FrontPage;
