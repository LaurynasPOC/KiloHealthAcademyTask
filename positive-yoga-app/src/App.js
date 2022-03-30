import Header from "./components/Header";
import Headline from "./components/HeadLine";
import MonthPlan from "./components/MonthPlan";
import MonthPlanHeadline from "./components/MonthPlanHeadline";
import Button from "./components/Button";
import PaymentSection from "./components/PaymentSection";
import AdvertismentSection from "./components/AdvertismentSection";
function App() {
  return (
    <div>
      <Header />
      <Headline text={"Get access to your yoga program now!"} />
      <MonthPlanHeadline />
      <MonthPlan
        month={6}
        price={9.99}
        priceWithoutDiscount={119.94}
        priceWithDiscount={59.94}
      />
      <MonthPlan
        month={3}
        price={14.99}
        priceWithoutDiscount={59.97}
        priceWithDiscount={44.97}
      />
      <MonthPlan month={1} price={19.99} />
      <Button text={"Get your plan"} />
      <PaymentSection />
      <Headline textS={"What is my program?"} />
      <AdvertismentSection />
      <Headline textS={"Hear success stories from our clients"} />
    </div>
  );
}

export default App;
