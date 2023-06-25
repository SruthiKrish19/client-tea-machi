import React, { useEffect, useRef } from "react";
import "./index.css";
import {
  subscriptionHeading,
  subscriptionContent,
} from "../../../constants.js";

function Subscriptions() {
  const subscriptionContainerRef = useRef(null);

  useEffect(() => {
    const subscriptionContainer = subscriptionContainerRef.current;
    const subscriptionCards =
      subscriptionContainer.querySelectorAll(".subscription-card");

    const handleScroll = () => {
      subscriptionCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardHeight = card.offsetHeight;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - cardHeight / 4) {
          setTimeout(() => {
            card.classList.add("animate");
          }, index * 200);
        } else {
          card.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="subscription-container" ref={subscriptionContainerRef}>
      <div className="subs-title text-center pb-3">
        <h2>{subscriptionHeading}</h2>
      </div>
      <div>{subscriptionContent}</div>
      <div className="subs-content">
        <div className="subscription-card-row">
          <div className="subscription-card">
            <div className="subscription-card-heading">Delivery Timings</div>
            <div className="subscription-card-content">
            <p>Choose your preferred delivery timings:</p>
              <ul className="tick-list">
                <li>Morning: 9:30 am - 12:00 pm</li>
                <li>Evening: 2:30 pm - 5:00 pm</li>
                <li>Both Morning & Evening</li>
              </ul>
            </div>
          </div>
          <div className="subscription-card">
            <div className="subscription-card-heading">Menu Selections</div>
            <div className="subscription-card-content">
            <p>Enjoy our delicious offerings:</p>
              <ul className="tick-list">
                <li>Tea: 500ml / 1L</li>
                <li>Coffee: 500ml / 1L</li>
                <li>A variety of Snacks</li>
              </ul>
            </div>
          </div>
          <div className="subscription-card">
            <div className="subscription-card-heading">Subscriptions</div>
            <div className="subscription-card-content">
            <p>Choose the subscription frequency:</p>
              <ul className="tick-list">
                <li>Weekly Subscription</li>
                <li>Monthly Subscription</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
