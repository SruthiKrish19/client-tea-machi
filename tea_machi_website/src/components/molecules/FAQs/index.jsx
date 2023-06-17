import "./index.css";
import Collapsable from "../../atoms/Collapse";

function Faqs() {
  return (
    <>
      <div className="faq-container">
        <Collapsable
          collapseHeader="Some Header here"
          collapseContent="Some content here"
        />
        <div>
        If you have any further questions or inquiries, please feel free to contact us.
        </div>
      </div>
    </>
  );
}


export default Faqs;
