import * as React from "react";
import { Col, Grid, PageHeader, Row } from "react-bootstrap";
import "./Resume.css";
import { ResumeItemBody, ResumeItemTitle } from "./ResumeClass";

class ResumeItemRow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Row className="show-grid resumeItem">
        {this.props.children}
      </Row>
    );
  }
}

class Resume extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  timeAtX(startDate: Date, endDate: Date = new Date()) {
    const years: number = endDate.getFullYear() - startDate.getFullYear();
    let months: number = endDate.getMonth() - startDate.getMonth();
    months += (endDate.getDate() >= startDate.getDate()) ? 1 : 0;

    let timeSpan: string = (years > 0) ? `${years} Year` : "";
    timeSpan += (years > 1) ? "s" : "";
    timeSpan += (months > 0) ? ` ${months} Month` : "";
    timeSpan += (months > 1) ? "s" : "";

    return (
      <p>{timeSpan}</p>
    );
  }
  // tslint:disable:jsx-no-multiline-js
  render() {
    return (
      <div className="Resume">
        <PageHeader className="pageheader">
          Resume<i id="subtitle">, bits about me in reverse-chronological order</i>
          <a className="forkMe" href="https://github.com/sblack4/sblack4.github.io">
            <img className="forkMe" src="/headshot-2018.jpg" alt="Fork me on Github" />
          </a>
        </PageHeader>
        <Grid className="resumeItems">

          {/* Overview */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div>
                  <a href="https://sblack4.github.io">
                    <img className="me" src="/headshot-2018.jpg" />
                  </a>
                </div>)}
            >
            <ResumeItemTitle>
              Steven Black
            </ResumeItemTitle>
              <p className="paragraph">

                <div className="findme">
                Check out some of my work at <a href="https://sblack4.github.io">
                    sblack4.github.io
                  </a>!
                  My talents include <b>enthusiasm</b> and <b>mental agility</b> which have helped me employ tools like; 
                  <b>apache&nbsp;spark</b>, &nbsp;
                  <b>scala</b>, &nbsp;
                  <b>python</b>, &nbsp;
                  <b>linux</b>, &nbsp;
                  <b>databases</b>, &nbsp;
                  <b>data&nbsp;engineering</b>, &nbsp;
                  <b>data&nbsp;science</b>, &nbsp;
                  <b>scrum</b>, &nbsp;
                  <b>systems&nbsp;architecture</b>, &nbsp;
                  <b>cloud</b>, &nbsp;
                  <b>containers</b>, &nbsp;
                  <b>virtualization</b>, &nbsp;
                  and most anything else that helps us solve problems!
                </div>
                In addition to work, I spend a significant amount of time in self-study 
                (my other duty is chasing the little one pictured!). I enjoy 
                mathematics, artificial intelligence, programming, and devops 
                but am still looking for the opportunity to use them at work!
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* UMBC */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div><a target="blank" href="https://www.umbc.edu/">
                  <img
                    id="umbc_Logo"
                    className="logo"
                    src={process.env.PUBLIC_URL + "/umbc-seal.svg"}
                    alt="University of Maryland, Baltimore"
                  />
                  </a>
                  <p>
                    Jan 2018 - Present
                  </p>
                  {this.timeAtX(new Date(2018, 1, 1))}
                </div>)
              }
            >
            <ResumeItemTitle>
              Masters Student
              <br />
              <small>at <a target="blank" href="https://www.umbc.edu/">University of Maryland, Baltimore</a></small>
              <br />
            </ResumeItemTitle>
              <p className="paragraph">
                I'm pursuing the thesis-track in the UMBC Masters of IS. 
                I've toyed with the idea of higher education before (I was a member of the GMU Neuroscience PHD 
                program before leaving for Carahsoft) but this time I've already got the experience. I enjoy
                learning about <b>Database Management Systems</b>, <b>networking</b>, or the <b>SDLC</b>. 
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Oracle */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div>
                  <a target="blank" href="https://www.oracle.com/">
                    <img id="oracle_Logo" className="logo" src={process.env.PUBLIC_URL + "/Oracle_logo.png"} alt="Oracle Corp." />
                  </a>
                  <p>
                    July 2017 - Present
                  </p>
                  {this.timeAtX(new Date(2017, 7, 10))}
                </div>)
              }
            >
            <ResumeItemTitle>
              Cloud Solution Engineer
              <br />
              <small>at <a target="blank" href="https://www.oracle.com/">Oracle Technology Corp.</a></small>
              <br />
            </ResumeItemTitle>
              <p className="paragraph">
                You can check out some of my work at
                &nbsp;<a href="https://github.com/unofficialoraclecloudhub">github.com/unofficialoraclecloudhub</a>!&nbsp;
                Most of my work is centered around data! I get to use cutting-edge technologies
                like <b>Hadoop, Spark, Hive, Kafka, Object Storage, Oracle Database, and MySQL</b> in the cloud!
                I am responsible to make sure customers are supported technically throughout the sales cycle.
                I act as a technical resource during discovery sessions, build proof-of-concepts, perform workshops, and give demos.
            </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Carahsoft */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div>
                  <a target="blank" href="http://www.carahsoft.com/">
                    <img id="carahLogo" className="logo" src={process.env.PUBLIC_URL + "/carahLogo.png"} alt="Carahsoft Technology Corp." />
                  </a>
                  <p>
                    Feb 2016 - July 2017
                    </p>
                  {this.timeAtX(new Date(2016, 2, 15), new Date(2017, 5, 30))}
                </div>)
              }
            >
            <ResumeItemTitle>
              Data Scientist
              <br />
              <small>at <a target="blank" href="http://www.carahsoft.com/">Carahsoft Technology Corp.</a></small>
              <br />
            </ResumeItemTitle>
              <p className="paragraph">
                Carahsoft is a dynamic work environment where I'm constantly changing teams and goals.
                Most of my job involves working with our <b>SQL</b> databases
                (T-SQL &amp; MySQL),
                but most of all I enjoy programming.
                My roots are in <b>python</b> but I've come to enjoy the benefits of typed languges and
                do almost all of my work in either <b>C#</b> (framework and core) or <b>Typescript</b>.
            </p>
              <p className="paragraph">
                My projects have been diverse;
                creating a <b>web-app</b> to display stats on monitors placed around the office, 
                maintaining and extending our home-built <b>CRM</b>, 
                administering <b>Windows</b> and <b>Linux</b> servers, 
                working with <b>Tableau</b>/<b>Qlik</b>/<b>ZoomData</b>/<b>Splunk</b>/VBA in Excel,
                all kinds of <b>data-visualization</b>, <b>data science</b>, and <b>programming</b> work!
            </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Grad School */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div>
                  <a target="_blank" href="https://krasnow.gmu.edu/">
                    <img id="krasnowLogo" className="logo" src={process.env.PUBLIC_URL + "/krasnow_logo.png"} alt="Oracle Corp." />
                  </a> 
                  <p>April 2014 - May 2015</p>
                  {this.timeAtX(new Date(2014, 4), new Date(2015, 5))}
                </div>
              )}
            >
            <ResumeItemTitle>
              Researcher, Neuroscience
              <br />
              <small> <a target="_blank" href="https://krasnow.gmu.edu/">
              Krasnow Institute for Advanced Study</a> Under Nadine Kabbani </small>
              <br />
            </ResumeItemTitle>
              <p className="paragraph">
                I performed a variety of bench-work but the bulk of my work was in 
                hypothesis testing and data-visualization, 
                working in working in <b>Excel</b>, <b>R</b>, and <b>SPSS</b>. I presented a poster at the Society for
                 Neuroscience Annual Meeting which summarized my work titled “<i>Cytoskeletal
                 motility and structural growth in developing neural cells is driven by
                 α7- nicotinic acetylcholine receptor association with G proteins</i>”.
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Undergrad */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div>
                  <a target="__blank" href="https://economics.gmu.edu/">
                  <img
                    id="Gmu_Econ_Logo"
                    className="logo"
                    src={process.env.PUBLIC_URL + "/gmu_economics_logo.png"}
                    alt="GMU Economics Dept"
                  />
                  </a>
                  <p>Aug 2009 – April 2014</p>
                  5 Years
                </div>
              )}
            >
            <ResumeItemTitle>
              B.S. Economics
              <br />
              <small>George Mason University</small>
              <br />
            </ResumeItemTitle>
              <p className="paragraph">
                I enjoyed a significant amount coursework in IT, Economics, Math, Biology,
                 Neuroscience, and Psychology but ultimately chose 
                 to major in Economics. 
              </p>
              <p className="paragraph">
              Relevant Coursework; Math (Discrete, Calc II), 
              Statistics (Graduate level), Operations Research, 
              Java, Relational Databases
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Econometrics Research Assistant */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div>
                  <a target="__blank" href="https://economics.gmu.edu/">
                  <img
                    id="Gmu_Econ_Logo"
                    className="logo"
                    src={process.env.PUBLIC_URL + "/gmu_economics_logo.png"}
                    alt="GMU Economics Dept"
                  />
                  </a>
                  <p>Feb 2013 – Aug 2013</p>
                  1 Year and 2 Months
                </div>)}
            >
            <ResumeItemTitle>
              Econometrics Research Assistant
              <br />
              <small>GMU Economics Department Under Drs. Dave Hebert and Thomas Stratman</small>
            </ResumeItemTitle>
              <p className="paragraph">
                I crawled the internet for data on timberlands in the northwest United States. Then the data was curated and
                 loaded into Excel files. The project was investigating the tragedy of the anti-commons.
              </p>

            </ResumeItemBody>
          </ResumeItemRow>

          {/* Disney */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div>
                  <a target="__blank" href="https://jobs.disneycareers.com/disney-college-program" >
                    <img id="disney_Logo" className="logo" src={process.env.PUBLIC_URL + "/disneyWorld_logo.png"} alt="Disney World" />
                  </a> 
                  <p>Feb 2013 - May 2013</p>
                  4 Months
                </div>)
              }
            >
            <ResumeItemTitle>
              Disney College Program
              <br />
              <small>Walt Disney World Resort, Orlando Florida </small>
              <br />
            </ResumeItemTitle>
              <p className="paragraph">
                Operated rollercoaster, Expedition Everest, in Animal Kingdom. I had the opportunity to learn from the
                 world's experts in customer service and have a blast!
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Psych Research Assistant */}

          <ResumeItemRow>
            <ResumeItemBody
              timeElement={(
                <div>
                  <a target="__blank" href="https://humanfactors.gmu.edu/">
                  <img id="arch_Logo" className="logo" src={process.env.PUBLIC_URL + "/arch_logo.png"} alt="GMU ARCH Lab" />
                  </a> 
                  <p>Aug 2012 - Dec 2013</p>
                  1 Year 5 Months
                </div>)}
            >
            <ResumeItemTitle>
              Psychology Research Assistant
              <br />
              <small>Human Factors &amp; Applied Cognition Labs Under Drs. Matthew Peterson &amp; Eric Blumberg</small>
              <br />
            </ResumeItemTitle>
              <p className="paragraph">
                I worked mainly in the Eye-tracking lab but also trained with EEG and TCDS. I ran human subjects through a
                 series of tasks, recorded the data, and paid them as necessary. My work was mainly done to assess working
                  memory inhibition by activation of the occipital lobe.

              </p>

            </ResumeItemBody>
          </ResumeItemRow>

          {/* Test Row */}
          <ResumeItemRow>
            <ResumeItemTitle>
              {/*Test Title*/}
            </ResumeItemTitle>
            <ResumeItemBody timeElement={<div />}>
              <p className="paragraph">
                {/*Test Body 1*/}
              </p>
              <p className="paragraph">
                {/*Test Body 2*/}
              </p>
            </ResumeItemBody>
          </ResumeItemRow>
          {/* Test Row */}

        </Grid>
      </div>
    );
  }
}

export { Resume };
