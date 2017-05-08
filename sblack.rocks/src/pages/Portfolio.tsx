import * as React from "react";
import {Col, Grid, PageHeader, Row} from "react-bootstrap";
import "./Portfolio.css";

class PortfolioItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return(
      <Row className="show-grid">
        <div className="portfolioRow plx"/>
        <Row className="portfolioContent">
          {this.props.children}
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
              To see what I'm coding on in my free time visit my Github 
              <a href="https://github.com/sblack4">github.com/sblack4</a>
              &nbsp; where I keep my personal projects under version control. Keep an eye on my Kaggle &nbsp;
              <a href="https://www.kaggle.com/sblack">kaggle.com/sblack</a> 
              where I've recently taken an interest.
              </p>
              <p className="paragraph">
                I've had a lot of fun with these projects and like to 
                take a sense of pride in my work.  That said, 
                the project of which I am most proud is named Elias, and pictured to the right (he's also the most fun).  
                If you would like specific samples or help 
                with something similar please email me at 
                <a href="mailto:genseb7@gmail.com">genseb7@gmail.com</a>
              </p>
            </Col>
            <Col xs={10} smOffset={0} sm={6} md={5}>
              <img id="messyBabyCheesing" 
                src={process.env.PUBLIC_URL + "/messyBabyCheesing.jpg"} alt="The cutest and messiest baby ever <3" 
              />
            </Col>
          </Row>
          <PortfolioItem>
            <h3> TVs </h3>
            <p>text</p>
            <img id="messyBabyCheesing" 
                src={process.env.PUBLIC_URL + "/IMG_2813.jpg"} alt="" 
              />
          </PortfolioItem>
          <PortfolioItem>
            <h3> Email Service </h3>
            <p>text</p>
          </PortfolioItem>
          <PortfolioItem>
            <h3> Microsoft Data Science Certificate </h3>
            <p>text</p>
            <object data={process.env.PUBLIC_URL + "/Certificate.pdf"} type="application/pdf">
            <iframe
                src={process.env.PUBLIC_URL + "/Certificate.pdf"} alt="" 
              />
            </object>
            
          </PortfolioItem>
        </Grid>
      </div>
    );
  }
}

export {Portfolio};
