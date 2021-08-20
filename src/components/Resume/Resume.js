import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="resume" className="s-resume target-section">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Work History</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <div className="ga-logo">
                    <h4 className="h3">
                                        General Assembly{" "}
                                        <a href="https://generalassemb.ly/">        
                                            <img src="images/GA-Logo.png" alt="logo" />
                                            </a>
                    </h4>
                  </div>
                  <p className="resume-block__header-meta">
                    <span>Software Engineering Fellow</span>
                    <span className="resume-block__header-date">
                      April 2020 - Present
                    </span>
                  </p>
                </div>
                <p>
                  In the summer of 2020, I embarked on a fully immersive
                  Software Engineering and Programming cohort, run by General
                  Assembly. In that time I created a few projects including a
                  self-help blogging site that used ruby on rails backend with
                  an SQL database, and a react frontend. I also worked on an
                  open source meal recipe app using React/Redux, Node/Express,
                  and MongoDB. You can find some of these projects below. It was a great introduction to this career path and gave me rare opportunities for peer-coding.
                </p>
              </div>{" "}
              {/* end resume-block */}
              <div className="resume-block">
                <div className="resume-block__header">
                  <div className="pr-logo">
                    <h4 className="h3">
                                        Public Records{" "}
                                        <a href="https://publicrecords.nyc/">  
                                            <img src="images/gif/PublicRecsLogo.gif" alt="PRlogo" />
                                            </a>
                    </h4>
                  </div>
                  <p className="resume-block__header-meta">
                    <span>Client Facing Services</span>
                    <span className="resume-block__header-date">
                      March 2019 - Present
                    </span>
                  </p>
                </div>
                <p>
                 
                </p>
              </div>{" "}
              {/* end resume-block */}
            </div>
          </div>{" "}
          {/* s-resume__section */}
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <p>
                 Since finishing at GA, I spend most of my time on learning resources like Udemy and Leetcode working to improve my skillset. Below are my current concentrations.
                </p>
                <ul className="skill-bars-fat" className="skill-icons">
                  {/* <li>
                    <div className="progress percent85" />
                    <strong>HTML</strong>
                  </li>
                  <li>
                    <div className="progress percent85" />
                    <strong>CSS</strong>
                  </li>
                  <li>
                    <div className="progress percent65" />
                                    <strong>Javascript</strong>
                                    <img src="images/portfolio/Skills/javascriptlogo.png" alt="javascript" />
                  </li>
                  <li>
                    <div className="progress percent90" />
                    <strong>Figma</strong>
                  </li>
                  <li>
                    <div className="progress percent75" />
                    <strong>Illustrator</strong>
                  </li>
                  <li>
                    <div className="progress percent60" />
                    <strong>Photoshop</strong>
                  </li> */}
                  <img src="images/portfolio/Skills/Html5Logo.png" alt="html" />
                  <img src="images/portfolio/Skills/CSSlogo.png" alt="CSS" />
                  <img src="images/portfolio/Skills/sassLogo.png" alt="SASS" />
                  <img
                    src="images/portfolio/Skills/ReactLogo.png"
                    alt="React"
                  />
                  <img
                    src="images/portfolio/Skills/nodejslogo.png"
                    alt="Node"
                  />
                  <img
                    src="images/portfolio/Skills/Expressjs.png"
                    alt="Express"
                  />
                  <img
                    src="images/portfolio/Skills/mongodb-logo.png"
                    alt="MongoDB"
                  />
                  <img
                    src="images/portfolio/Skills/PSGSQLLogo.png"
                    alt="PostgreSQL"
                  />
                  <img
                    src="images/portfolio/Skills/javascriptlogo.png"
                    alt="javascript"
                  />
                  <img
                    src="images/portfolio/Skills/Go-Logo_Blue.png"
                    alt="Go"
                  />
                  <img
                    src="images/portfolio/Skills/Ruby_on_Rails-logo.png"
                    alt="RoR"
                  />
                </ul>
              </div>{" "}
              {/* end resume-block */}
            </div>
          </div>{" "}
          {/* s-resume__section */}
        </section>{" "}
        {/* end s-resume */}
      </React.Fragment>
    );
  }
}