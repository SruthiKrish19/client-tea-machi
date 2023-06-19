import "./index.css";
import { subscriptionHeading, subscriptionContent } from "../../../constants.js"

function Subscriptions() {
  return (
    <>
      <div className="subscription-container">
        <div className="subscription-heading">
            {subscriptionHeading}
        </div>
        <div className="subscription-content">
          {subscriptionContent}
        </div>
      </div>
    </>
  );
}


export default Subscriptions;
