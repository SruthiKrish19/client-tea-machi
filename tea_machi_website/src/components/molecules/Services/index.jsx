import "./index.css";
import {
  serviceHeading1,
  serviceContent1,
  serviceHeading2,
  serviceContent2,
  serviceHeading3,
  serviceContent3,
} from "../../../constants";
import fssaiImg from "../../../assets/FSSAI.png";
import packageImg from "../../../assets/package.png";
import deliveryImage from "../../../assets/delivery.png";

function Services() {
  return (
    <>
      <div className="service-container">
        <div className="service-item">
          <div className="service-img">
            <img src={fssaiImg} alt="FSSAI" className="responsive-img" />
          </div>
          <div className="service-text">
            <div className="service-heading">{serviceHeading1}</div>
            <div className="service-content">{serviceContent1}</div>
          </div>
        </div>
        <div className="service-item">
          <div className="service-text">
            <div className="service-heading">{serviceHeading2}</div>
            <div className="service-content">{serviceContent2}</div>
          </div>
          <div className="service-img">
            <img src={packageImg} alt="Package" className="responsive-img" height="10px"/>
          </div>
        </div>
        <div className="service-item">
          <div className="service-img">
            <img src={deliveryImage} alt="Delivery" className="responsive-img"  />
          </div>
          <div className="service-text">
            <div className="service-heading">{serviceHeading3}</div>
            <div className="service-content">{serviceContent3}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
