import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>Rajasthan, India</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Consistently self-improving and building high-impact data and web projects. Highlighting a project-based learning approach.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Strengths</h4>
                <h5>Independent & Fast Learner</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Problem-solving mindset, able to work independently, and dedicated to solving business problems using automation and data insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
