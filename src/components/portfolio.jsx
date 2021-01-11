import React from "react";

import data from "../data/portfolio.json";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here are my top three favorite projects made at hackathons.
                  You can see more on my{" "}
                  <a href="https://devpost.com/ReshmiCode" target="_blank">
                    Devpost
                  </a>{" "}
                  or the projects section of my{" "}
                  <a
                    href="https://www.linkedin.com/in/reshmi-ranjith"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  !
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {data.projects.map((project) => (
              <div className="col-md-4">
                <div className="work-box">
                  <a href={project.url} target="_blank">
                    <div className="work-img">
                      <img src={project.image} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-12">
                          <h2 className="w-title">{project.title}</h2>
                          <p>{project.description}</p>
                          <div className="w-more">
                            <span className="w-ctegory">{project.tech}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
