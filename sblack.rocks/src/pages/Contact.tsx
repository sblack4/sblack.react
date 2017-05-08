import * as React from "react";
import { Col, Grid, PageHeader, Row } from "react-bootstrap";
import "./Contact.css";

class Contact extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="contact" >
        <PageHeader>Contact </PageHeader>
        <Grid>
          <Row className="flexRow">
            <Col smOffset={1} sm={10} className="contactOptions">
              <div>
                <p className="contactItem">
                  <a href="https://github.com/sblack4">
                    <i className="fa fa-github" aria-hidden="true" />
                    github.com/sblack4
                  </a>
                </p>
                <p className="contactItem">
                  <a href="https://www.linkedin.com/in/steven-black-54a5396a/">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    linkedin.com/in/steven-black
                  </a>
                </p>
                <p className="contactItem">
                  <a href="https://medium.com/@stevenblack_53168">
                    <i className="fa fa-medium" aria-hidden="true" />
                    medium.com/@stevenblack
                  </a>
                </p>
                <p className="contactItem">
                  <a href="https://www.kaggle.com/sblack">
                    <i className="fa fa-area-chart" aria-hidden="true" />
                    kaggle.com/sblack
                  </a>
                </p>
                <p className="contactItem">
                  <a href="https://stackoverflow.com/users/5568528/steven-black?tab=profile">
                    <i className="fa fa-stack-overflow" aria-hidden="true" />
                    stackoverflow.com/steven-black
                  </a>
                </p>
                <p className="contactItem">
                  <a href="mailto:sblack@sblack.rocks">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                    sblack@sblack.rocks
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export { Contact };
