import * as React from "react";
import { Col, Grid, PageHeader, Row } from "react-bootstrap";
import "./Home.css";

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <PageHeader> Hello World! </PageHeader>
        <Grid>
          <Row className="show-grid">
            <Col sm={8} md={6}>
              <img id="imgOnDock" src={process.env.PUBLIC_URL + "/bayHouseDock.JPG"} alt="Us on the Dock <3" />
            </Col>
            <Col sm={4} md={6}>
              <p className="homeBody">
                Thanks for taking an interest in me.  I hope this page helps you
            , whether you're building your own website or looking for a contact with data, web, and security skills.
            <br/>
             In either case please feel free to drop me an email.
          </p>
            </Col>

          </Row>
        </Grid>
      </div>

    );
  }
}

export { Home };
