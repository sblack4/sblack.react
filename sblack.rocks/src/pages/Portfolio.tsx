import * as React from "react";
import { Col, Grid, PageHeader, Row } from "react-bootstrap";
import "./Portfolio.css";

class PortfolioItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Row className="show-grid">
        <div className="portfolioRow plx" style={{backgroundImage: `url(${process.env.PUBLIC_URL}"3px-tile.png")`}}/>
        <Row className="portfolioContent">
          <Col xs={11}>
            {this.props.children}
          </Col>
        </Row>
      </Row>
    );
  }
}

class Portfolio extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="Portfolio" >
        <PageHeader> Portfolio </PageHeader>
        <Grid>
          <Row className="show-grid portfolioIntro">
            <Col xs={10} smOffset={0} sm={6} md={6}>
              <p className="paragraph">
                To see what I'm coding on in my free time visit my Github&nbsp;
                <a href="https://github.com/sblack4">github.com/sblack4</a>
                &nbsp; where I keep my personal projects under version control. Keep an eye on my Kaggle
              &nbsp; <a href="https://www.kaggle.com/sblack">kaggle.com/sblack</a>&nbsp;
                where I've recently taken an interest.
              </p>
              <p className="paragraph">
                I've had a lot of fun with these projects and like to
                take a sense of pride in my work.  That said,
                the project of which I am most proud is named Elias, and pictured to the right (he's also the most fun).
                If you would like specific samples or help
                with something similar please email me at
                &nbsp;<a href="mailto:genseb7@gmail.com">genseb7@gmail.com</a>&nbsp;
                (<i>note</i> I'm talking about coding & data science... not the baby!)
              </p>
            </Col>
            <Col xs={10} smOffset={0} sm={6} md={5}>
              <img
                id="messyBabyCheesing"
                src={process.env.PUBLIC_URL + "/messyBabyCheesing.JPG"}
                alt="The cutest and messiest baby ever <3"
              />
            </Col>
          </Row>
          <PortfolioItem>
            <h3> Big Data Deployments </h3>
            <Col xs={5}>
              <p className="paragraph">
                Hortonworks  coming soon
            </p>
            </Col>
            <Col xs={5}>
              <img
                id="hadoopPic"
                src={process.env.PUBLIC_URL + "/hadooop.jpg"}
                alt="hadoop <3"
              />
            </Col>
          </PortfolioItem>
          <PortfolioItem>
            <h3> Web Scraper </h3>
            <Col xs={5}>
              <p className="paragraph">
                Python web scraper, details coming soon
            </p>
            </Col>
            {/* <Col xs={5}>
              <img
                id="emailServicePic"
                src={process.env.PUBLIC_URL + "/emailService.PNG"}
                alt="An email"
              />
            </Col> */}
          </PortfolioItem>
          <PortfolioItem>
            <h3> TVs </h3>
            <p className="paragraph">
              This is the coolest project I've completed so far!
              We've installed 32 TVs around the office each with their own Asus stick.
            </p>
            <p className="paragraph">
              This is a multi-tiered project.  The TVs query a SQL database to see what they should be displaying at that point in time,
              which can be a webpage, powerpoint, or really anything! I've written a simple GUI in WPF to control the monitors.
              They default to displaying a webpage which cycles through a list of reports generated for that TV.
            </p>
            <p className="paragraph" id="tvHowTo">
              The default webpage is produced in four parts, please excuse me if I get a bit geeky:
              <ul>
                <li> The reports are produced with a WPF gui that stores and validates a SQL query
                </li>
                <li> A service, written in C# and hosted on a Windows Server, queries a SQL database
              and caches json files with data on the web-hosting server (to reduce database load... there are a lot of
              different reports!).
                </li>
                <li>The web-hosting server (also a Window Server running IIS) is your standard MVC + Services pattern. This
               serves the list of reports as well as the json files.
                </li>
                <li> The front end is kept in a different repository and there I use
               webpack-dev-server plus express for a faux-api for easy development, plus when I want to deploy the front end I
               don't need to compile or anything- I just run a script which copies all the files to my server!  It's  written
               in Typescript using proprietary libraries I've produced for Carahsoft but relies heavily on D3.
               I've also taken advantage of Typescripts OO features and used Abstract Factory and Iterator patterns
                </li>
              </ul>
            </p>
            <img
              id="tvsPic"
              src={process.env.PUBLIC_URL + "/IMG_2813.JPG"}
              alt="A few of our TVs"
            />
          </PortfolioItem>
          <PortfolioItem>
            <h3> Email Services </h3>
            <Col xs={5}>
              <p className="paragraph">
                I've actually set up a few of these. Some are simple cron-jobs for one-off reports pulling from a non-standard database
              One is a full service that pulls variable reports which you can design in a WPF GUI.  The requests I've gotten for these
              reports have truly tested my SQL-fu.
            </p>
            </Col>
            <Col xs={5}>
              <img
                id="emailServicePic"
                src={process.env.PUBLIC_URL + "/emailService.PNG"}
                alt="An email"
              />
            </Col>
          </PortfolioItem>
          <PortfolioItem>
            <h3> Microsoft Data Science Certificate </h3>
            <p className="paragraph">
              Machine Learning is absolutely fascinating so when I head Microsoft was putting their name on a course, which
              was reasonably priced, I had to try it.  Overall I learned a LOT about advanced Excel and SQL (which is pretty
              amazing considering I was already an expert in both) but didn't take away much new knowledge in Machine Learning
              other than how to use Azures machine learning platform. I did get to practice working with python's pandas
              and scikit-learn though :).
              I've kept a few of the forked repositories from the courses which have some of my code at
              &nbsp;<a href="https://github.com/sblack4/Data-Science-Essentials">https://github.com/sblack4/Data-Science-Essentials</a>,
              &nbsp;<a href="https://github.com/sblack4/DAT210x">https://github.com/sblack4/DAT210x</a>,
              &nbsp;<a href="https://github.com/sblack4/Applied-Machine-Learning">https://github.com/sblack4/Applied-Machine-Learning</a>
              , and
              &nbsp;<a href="https://github.com/sblack4/Principles-Of-Machine-Learning">
                https://github.com/sblack4/Principles-Of-Machine-Learning</a>
            </p>
            <div id="certDiv">
              <object id="certObject" data={process.env.PUBLIC_URL + "/Certificate.pdf"} type="application/pdf">
                <iframe
                  id="certIframe"
                  src={process.env.PUBLIC_URL + "/Certificate.pdf"}
                >
                  This browser does not support PDFs. Please download the PDF to view it:
              <a href={process.env.PUBLIC_URL + "/Certificate.pdf"} download="true">Download PDF</a>
                </iframe>
              </object>
            </div>
          </PortfolioItem>
          <PortfolioItem>
            <h3> This Website </h3>
            <p className="paragraph">
              This was a fun one that I actually managed to squeeze into my free time.  This site is actually just a static SPA
              written in Typescript with react and react-route to give it the feel of a full website.  I chose to go the SPA route
              to sharpen my react skills in preparation for a few projects at work.  You can see the code on github at
              &nbsp;<a href="https://github.com/sblack4/sblack4.github.io">https://github.com/sblack4/sblack4.github.io</a>
            </p>
            <p className="paragraph">
              Hosting it was also fun, I ended up using the Google Cloud compute engine so I could practice secure hosting with apache
              and use SSL on my own domain at
              &nbsp;<a href="https://sblack.rocks">https://sblack.rocks</a>&nbsp;
              This site is also hosted on github at
              &nbsp;<a href="https://sblack4.github.io">https://sblack4.github.io</a>&nbsp;
            </p>
          </PortfolioItem>

          <PortfolioItem>
            <h3> Advanced SQL Queries </h3>
            <p className="paragraph">
              During my time at Carahsoft I earned my black belt in SQL.  Obviously I can't post the
               queries here but I take pride in my work and make sure to use the correct syntax as well
               as comment appropriately.  If you'd like a sample I've managed to take a lot of complex data-mangling
               out of our code and put them through a wringer of SQL SELECTs, PIVOTs, and CURSORs that will
               make your head spin.  
              {/*use that call query and maybe the data viz*/}
            </p>
          </PortfolioItem>

          <PortfolioItem>
              <h3> Data Information Tools: Qlik, Tableau, Splunk, Zoomdata </h3>
              <p className="paragraph">
                I'm comfortable with Splunk and Tableau. Most of my BI experience is with Qlik and Zoomdata. 
                 Excel, which deserves credit for being a great data-browsing tool, is also a favorite of mine.
                 For data exploration nothing can beat the simplicity and extensibility of Qlik.  
                 I'm comfortable with all the built-in functions of Excel as well as pulling data into excel
                 from other sources (ODBC, APIs, HTML), Power Query, and programming new function in VBA.
              </p>
              <img
                id="Qlik_demo"
                src={process.env.PUBLIC_URL + "/Qlik_Ex.PNG"}
                alt="One Qlik Dashboard"
              />
          </PortfolioItem>
          <div style={{height: "5em"}} />
        </Grid>
      </div>
    );
  }
}

export { Portfolio };
