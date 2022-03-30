import Payment from "../assets/Payment.svg";
import "./PaymentSection.scss";

const PaymentSection = () => {
  return (
    <div className="payment-container">
      <p>
        After 7 days free trial subscription payment is automatically charged
        from your account unless it is canceled at least 24 hours before the end
        of the trial period.
      </p>
      <p>
        By choosing a payment method you agree to the{" "}
        <span>
          T<span>&#38;</span>Cs
        </span>{" "}
        and <span>Privacy Policy</span>
      </p>
      <img src={Payment} alt="payment details" />
    </div>
  );
};

export default PaymentSection;
