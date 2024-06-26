import "./Styles/About.css";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="about-container"
    >
      <h1 className="about-heading">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="about-details">
        <div className="about-text">
          <h2 className="about-subheading">Our approach:</h2>
          <button className="about-button">
            Read More
            <div className="about-button-dot"></div>
          </button>
        </div>
        <div className="about-image"></div>
      </div>
    </div>
  );
};

export default About;
