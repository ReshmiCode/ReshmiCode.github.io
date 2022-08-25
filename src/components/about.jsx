import React, { useState } from "react";
import CountUp from "react-countup";

const About = () => {
  const [showNumbs, setShowNumbs] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowNumbs((prev) => !prev);
  };

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="box-shadow-full">
          <div className="about-me pt-4 pt-md-0">
            <div className="row">
              <div className="col-md-6">
                <div className="title-box-2">
                  <h5 className="title-left">About Me</h5>
                </div>
                <div>
                  <p className="lead">
                    I stumbled on my passion for Computer Science by accident.
                    Since then, I have been passionate about introducing others
                    to STEM.
                    <br />
                    I am currently working as Associate Software Engineer at
                    Capital One.
                    <br />I have a background in Object-Oriented Programming,
                    Mobile App Development, Full Stack Development, and Quality
                    Assurance. I am dedicated, hardworking, and excited about
                    providing real contributions. I never get tired of learning.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="title-box-2 pt-4 pt-md-0">
                  <h5 className="title-left">The Numbers</h5>
                </div>
                <div className="more-info">
                  {!showNumbs && (
                    <button
                      className="button button-a button-big button-rouded"
                      onClick={handleClick}
                    >
                      Let's See!
                    </button>
                  )}
                  {showNumbs && (
                    <p className="lead">
                      Participated in <CountUp end={35} /> hackathons
                      <br />
                      Organized <CountUp end={30} /> workshops/socials
                      <br />
                      Honored with <CountUp end={19} /> hackathon awards
                      <br />
                      Received <CountUp end={11} /> internship offers
                      <br />
                      Involved in <CountUp end={9} /> clubs
                      <br />
                      Received <CountUp end={8} /> full-time offers
                      <br />
                      Had <CountUp end={6} /> internships
                      <br />
                      Held <CountUp end={4} /> club leadership positions
                      <br />
                      Acquired <CountUp end={4} /> scholarships for college
                      <br />
                      Obtained <CountUp end={3} /> digital certificates
                      <br />
                      Earned <CountUp end={2} /> degrees
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
