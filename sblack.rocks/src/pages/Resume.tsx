import * as React from "react";
import { Col, Grid, PageHeader, Row } from "react-bootstrap";
import "./Resume.css";

class ResumeItemTitle extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Row className="flexRow titleRow">
        <h3 className="title">
          {this.props.children}
        </h3>
      </Row>
    );
  }
}

class ResumeItemBody extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (<Row className="flexRow itemRow">
      <Col xs={10} sm={8}>
        {this.props.children}
      </Col>
      <Col xs={2} sm={4} className="timeSpan">
        {this.props.timeElement}
      </Col>
    </Row>
    );
  }
}

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
  render() {
    return (
      <div className="Resume">
        <PageHeader>
          Resume
          </PageHeader>
        <Grid className="resumeItems">

          <ResumeItemRow>
            <ResumeItemTitle>
              Overview
            </ResumeItemTitle>
            <ResumeItemBody timeElement={<div>
              </div>}>
              <p className="paragraph">
                I'm currently open to positions in Data Science and Programming.  
                The particular role is not so important as is finding the right fit: 
                I'm looking to develop my skills so need a challenging role at company that invests in its employees.
              </p>
              <p>
                You can download a more concise resume as a 
                 &nbsp;<a href={process.env.PUBLIC_URL + "StevenBlack Resume.pdf"} download>pdf</a>&nbsp; or
                 &nbsp;<a href={process.env.PUBLIC_URL + "StevenBlack Resume.docx"} download>word document</a>.
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Carahsoft */}

          <ResumeItemRow>
            <ResumeItemTitle>
              Currently I'm <b>Data Science program manager</b> at&nbsp;
              <a target="blank" href="http://www.carahsoft.com/">Carahsoft Technology Corp.</a>
              <br />
              <img id="carahLogo" src={process.env.PUBLIC_URL + "/carahLogo.png"} alt="Carahsoft Technology Corp." />
            </ResumeItemTitle>
            <ResumeItemBody timeElement={
              <div>
                <p>
                  Feb 2015 - Present
                  </p>
                {this.timeAtX(new Date(2016, 2, 15))}
              </div>
            }>
              <p className="paragraph">
                Carahsoft is a dynamic work environment where I'm constantly changing teams and goals.
                Most of my job involves working with our <b>SQL</b> databases
                (T-SQL & MySQL), which has earned me the nick-name "SQL-Wan Kenobi",
                but most of all I enjoy programming.
                My roots are in <b>python</b> but I've come to trust the compiler and
                do almost all of my work in either <b>C#</b> (framework and core) or <b>Typescript</b>.
            </p>
              <p className="paragraph">
                My projects have been diverse;
                creating a <b>web-app</b> to display stats on monitors placed around the office
                , building mail service applications
                , maintaining our <b>CRM</b>
                , administering <b>Windows</b> and <b>Linux</b> servers
                , working with <b>Tableau</b>/ <b>Qlik</b>/ <b>ZoomData</b>/ <b>Splunk</b>/ VBA in Excel
                , etc. etc. etc...

            </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Self-Taught */}

          <ResumeItemRow>
            <ResumeItemTitle>
              <b>Autodidact</b> / PHD in Googling
              </ResumeItemTitle>
            <ResumeItemBody timeElement={
              <div>
                <p>
                  1991 - Present
                  </p>
                {this.timeAtX(new Date(1991, 4, 25))}
              </div>
            }>
              <p className="paragraph">
                This section serves in part to show that I've tried not to take shortcuts in my computer science education
              but also to thank the teachers I've never been able to (directly) thank. In fact, I learned
              the word "Autodidact" from <a href="https://github.com/AllenDowney">Allen Downey's</a> <i>Think Complexity</i>&nbsp;
              which I'm working through here:
               &nbsp;<a href="https://github.com/sblack4/ThinkComplexity">github.com/sblack4/ThinkComplexity</a>
              </p>
              <p className="paragraph">
                <h4>Data Science</h4>
                While in Grad school my favorite part of research was data analysis, in that vein
                I've kept an eye toward using computers to make information out of data.
                I started with <a href="https://www.coursera.org/instructor/~82">Charles Severances</a>&nbsp;
                <i>Python for Informatics</i> Book & Coursera courses
                , completed <a href="https://academy.microsoft.com/en-us/certificates/d5684e05-1963-412f-971a-86da6fb49a83">
                  Microsoft's Data Science Program</a>, and get to munge data at work.  
                  I have a keen interest in <b>Machine Learning</b> but for the time being that is mostly a hobby.
              </p>
              <p className="paragraph">
                <h4>Web Dev</h4>
                Writing SPAs in Typescript, <b>D3</b>, and <b>React</b> is easily 50% of my job. I could not have done it 
                without Chrome DevTools, Codecademy, & CodeSchool!
                When it comes to back ends I like to use .Net for production
                , flask for pilots, and express/ webpack-dev-server for development.
                I also love the simplicity of centos/Apache but working in a .Net shop I rely heavily on Windows Server/IIs.
              </p>
              <p className="paragraph">
                <h4>OOP</h4>
                I've paid my homage to the computer science greats by reading their holy texts; 
                <i>Clean Code</i>, <i>Design Patterns</i> (I found it dry but ultimately worth the read), <i>The Mythical Man Month</i>, 
                and one of my favorite books <i>The Pragmatic Programmer</i>.  
              </p>
              <p className="paragraph">
                <h4>Tutoring</h4>
                Teaching someone else is the best way to learn and I've had the privilege to tutor students in 
                Calculus, Trigonometry, Neuropharmacology, Chemistry, and Economics.  

              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Grad School */}

          <ResumeItemRow>
            <ResumeItemTitle>
              PHD Student & Researcher, Neuroscience
              <br />
              <small> Krasnow Institute for Advanced Study Under Nadine Kabbani </small>
            </ResumeItemTitle>
            <ResumeItemBody timeElement={
              <div>
                <p>April 2014 - May 2015</p>
                {this.timeAtX(new Date(2014, 4), new Date(2015, 5))}
              </div>
              }>
              <p className="paragraph">
                I performed bench-work doing cell culture, proteomics
                , live cell calcium imaging, as well as a host of other molecular-biology assays.
                The bulk of my work was in hypothesis testing and data-visualization,
                 working in Excel, R, and SPSS. I presented a poster at the Society for
                 Neuroscience Annual Meeting which summarized my work titled “Cytoskeletal
                 motility and structural growth in developing neural cells is driven by
                 α7- nicotinic acetylcholine receptor association with G proteins”.  
                 Although neuroscience is fascinating my work was all theory and no 
                 application which left me yearning for a more practical challenge.  With 
                 the upcoming birth of my son I left grad school to pursue data-science.
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Undergrad */}

          <ResumeItemRow>
            <ResumeItemTitle>
              B.S. Economics 
              <br />
              <small>George Mason University</small>
            </ResumeItemTitle>
            <ResumeItemBody timeElement={
              <div>
                <p>Aug 2009 – April 2014</p>
                5 Years
              </div>
            }>
              <p className="paragraph">
                I’m very curious and so enjoyed a significant amount course-work in IT, Economics, Math, Biology, Neuroscience, and Psychology but ultimately chose Economics because of its versatility in the job market and because the Economics professors at George Mason are second to none.   
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Psych Research Assistant */}

          <ResumeItemRow>
            <ResumeItemTitle>
              Psychology Research Assistant
              <br />
              <small>Human Factors & Applied Cognition Labs Under Drs. Matthew Peterson & Eric Blumberg</small>
            </ResumeItemTitle>
            <ResumeItemBody timeElement={
              <div>
                <p>Aug 2012 - Dec 2013</p>
                1 Year 5 Months
              </div>
            }>
              <p className="paragraph">
                I worked mainly in the Eye-tracking lab but also trained with EEG and TCDS. I ran human subjects through a series of tasks, recorded the data, and paid them as necessary. My work was mainly done to assess working memory inhibition by activation of the occipital lobe.

              </p>

            </ResumeItemBody>
          </ResumeItemRow>

          {/* Econometrics Research Assistant */}

          <ResumeItemRow>
            <ResumeItemTitle>
              Econometrics Research Assistant
              <br />
              <small>GMU Economics Department Under Drs. Dave Hebert and Thomas Stratman</small>
            </ResumeItemTitle>
            <ResumeItemBody timeElement={
              <div>
                <p>Feb 2013 – Aug 2013</p>
                1 Year and 2 Months
              </div>
            }>
              <p className="paragraph">
                I crawled the internet for data on timberlands in the northwest United States. Then the data was curated and parsed into .xlsx format. The project was investigating the tragedy of the anti-commons.
              </p>

            </ResumeItemBody>
          </ResumeItemRow>

          {/* Disney */}

          <ResumeItemRow>
            <ResumeItemTitle>
              Disney College Program
              <br />
              <small>Walt Disney World Resort, Orlando Florida </small>
            </ResumeItemTitle>
            <ResumeItemBody timeElement={
              <div>
                <p>Feb 2013 - May 2013</p>
                4 Months
              </div>
            }>
              <p className="paragraph">
                Operated rollercoaster, Expedition Everest, in Animal Kingdom. I had the opportunity to learn from the worlds experts in customer service and have a blast 
              </p>
            </ResumeItemBody>
          </ResumeItemRow>

          {/* Test Row */}
          <ResumeItemRow>
            <ResumeItemTitle>
              {/*Test Title*/}
            </ResumeItemTitle>
            <ResumeItemBody timeElement={<div>
              {/*<p>Dates</p>Timespan*/}
              </div>}>
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
