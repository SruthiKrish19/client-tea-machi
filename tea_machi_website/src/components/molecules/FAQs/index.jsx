import "./index.css";
import Collapsable from "../../atoms/Collapse";
import { faqData } from "./FAQs"
import { faqFooter } from "../../../constants";

function Faqs() {
  const faqArray = Object.values(faqData);

  return (
    <>
      <div className="faq-container">
        {
          faqArray.map((faq) => (
            <Collapsable
              key={`faq${faq.header}`}
              collapseHeader={faq.header}
              collapseContent={faq.content}
            />
          ))
        }
        <div className="faq-footer">
        {faqFooter}
        </div>
      </div>
    </>
  );
}


export default Faqs;
