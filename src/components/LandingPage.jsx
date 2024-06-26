import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./Styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      <div className="textstructure">
        {["SYN / SK.GRIMM", "FRONT END", "DESIGNER"].map((item, index) => (
          <div key={index} className="masker">
            <div className="title-wrapper">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "9vw", opacity: "100%" }}
                  transition={{ ease: [0.76, 0, 0.24, 0], duration: 6.5 }}
                  className="title-decoration"
                ></motion.div>
              )}
              <h1 className="title">{item}</h1>
            </div>
          </div>
        ))}
      </div>
      
      <div className="info-section">
        
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="info-text">{item}</p>
        ))}
        <div className="start">
          <div className="start-button">Start the project</div>
          <div className="arrow-button">
            <FaArrowDownLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
