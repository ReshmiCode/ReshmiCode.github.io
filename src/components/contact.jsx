import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Today I Learned Blog</h5>
                      </div>
                      <div>
                        <p className="lead">
                          Over quarantine, I started a today I learned blog on
                          my tumblr. Here is one of my posts and click on it to
                          see more!
                        </p>
                        <div className="work-box">
                          <a
                            href="https://simplyprogramming.tumblr.com/"
                            target="_blank"
                          >
                            <div className="work-content">
                              <div className="row">
                                <div className="col-sm-12">
                                  <h2 className="w-title">Open Source</h2>
                                  <p>
                                    I contributed to open source for the first
                                    time today! It was through GHC’s OOD and I
                                    helped on a website that encourages others
                                    to participate in OO as well by listing
                                    projects by its members. I improved the
                                    styling for an element and added a button
                                    which also required styling. I noticed when
                                    changing the button that they had redundant
                                    code based on the current auth so I
                                    refactored it!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Just send me a message on LinkedIn.
                        </p>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://devpost.com/ReshmiCode"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-code"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/ReshmiCode"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/reshmi-ranjith"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box"></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
