import Header from "../components/Header/Header";
import Headline from "../components/HeadLine/HeadLine";
import MonthPlanHeadline from "../components/MonthPlan/MonthPlanHeadline";
import Button from "../components/Button/Button";
import PaymentSection from "../components/PaymentSection/PaymentSection";
import AdvertismentSection from "../components/AdvertismentSection/AdvertismentSection";
import YogaForMeSection from "../components/IsYogaForU/YogaForMeSection";
import PhoneSection from "../components/PhoneSection/PhoneSection";
import QuestionsSection from "../components/QuestionsSection/QuestionsSection";
import CardContainer from "../components/Cards/CardContainer";
import MonthPlanSection from "../components/MonthPlan/MonthPlanSection";
import CardContainerDekstop from "../components/Cards/CardContainerDekstop";
import "./FrontPage.scss";

const FrontPage = () => {
  return (
    <div>
      <Header />
      <div className="head-dekstop">
        <div className="plans-ordered">
          Over <strong> 52 147</strong> plans ordered.
        </div>
        <Headline text={"Get access to your yoga program now!"} />
      </div>
      <div className="body-container">
        <div className="head-mobile">
          <div className="plans-ordered">
            Over <strong> 52 147</strong> plans ordered.
          </div>
          <Headline text={"Get access to your yoga program now!"} />
        </div>
        <div className="top-section">
          <div className="dekstop-month-plan">
            <MonthPlanHeadline />
            <MonthPlanSection />
            <Button text={"Get your plan"} />
            <PaymentSection />
          </div>
          <div>
            <Headline textS={"What is my program?"} />
            <AdvertismentSection />
          </div>
        </div>

        <Headline textS={"Hear success stories from our clients"} />
        <div className="mobile-version">
          <CardContainer />
        </div>
        <div className="dekstop-version">
          <CardContainerDekstop />
        </div>
        <Button text={"Get my plan"} />
        <div className="dekstop-mid-mobile">
          <div>
            <Headline textS={"Is Positive Yoga right for me?"} />
            <YogaForMeSection />
          </div>
          <div>
            <Headline textS={"Start your Yoga journey now!"} />
            <PhoneSection />
          </div>
        </div>
        <div className="desktop-questions-h3">
          <Headline textS={"Frequently Asked Questions"} />
        </div>

        <QuestionsSection />
        <Button text={"Get your plan"} />
        <Headline textM={"Start your yoga program today!"} />
        <div className="top-section">
          <div className="dekstop-month-plan">
            <MonthPlanHeadline />
            <MonthPlanSection />
            <Button text={"Get your plan"} />
            <PaymentSection />
          </div>
          <div>
            <Headline textS={"What is my program?"} />
            <AdvertismentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
