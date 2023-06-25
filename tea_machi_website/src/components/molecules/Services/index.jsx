import React, { useEffect, useRef } from 'react';
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
import "./index.css";

function Services() {
  const serviceContainerRef = useRef(null);

  useEffect(() => {
    const serviceContainer = serviceContainerRef.current;
    const serviceItems = serviceContainer.querySelectorAll('.service-item');
  
    const handleScroll = () => {
      serviceItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemHeight = item.offsetHeight;
        const windowHeight = window.innerHeight;
  
        if (itemTop < windowHeight - itemHeight / 4) {
          setTimeout(() => {
            item.classList.add('animate');
          }, index * 200);
        } else {
          item.classList.remove('animate');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className="service-container" ref={serviceContainerRef}>
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
        <div className="service-img">
          <img src={packageImg} alt="Package" className="responsive-img" />
        </div>
        <div className="service-text">
          <div className="service-heading">{serviceHeading2}</div>
          <div className="service-content">{serviceContent2}</div>
        </div>
      </div>
      <div className="service-item">
        <div className="service-img">
          <img src={deliveryImage} alt="Delivery" className="responsive-img" style={{marginTop: "-80px"}}/>
        </div>
        <div className="service-text">
          <div className="service-heading" style={{marginTop: "-50px"}}>{serviceHeading3}</div>
          <div className="service-content">{serviceContent3}</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
