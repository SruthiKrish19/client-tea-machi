import "./index.css";
import {
  serviceHeading1,
  serviceContent1,
  serviceHeading2,
  serviceContent2,
  serviceHeading3,
  serviceContent3,
} from "../../../constants";

function Services() {
  return (
    <>
      <div className="service-container">
        <div className="service-heading">{serviceHeading1}</div>
        <div className="service-content">{serviceContent1}</div>
        <div className="service-heading">{serviceHeading2}</div>
        <div className="service-content">{serviceContent2}</div>
        <div className="service-heading">{serviceHeading3}</div>
        <div className="service-content">{serviceContent3}</div>
      </div>
    </>
  );
}

export default Services;
