import * as React from "react";
import {Col, Grid, PageHeader, Row} from "react-bootstrap";
import "./About.css";

class About extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="About" >
        <PageHeader> About </PageHeader>
        <Grid>
          <Row className="show-grid">
            <Col className="aboutBody" sm={6} md={7}>
              Where others see work, I see adventure... which is a nice way to say that I might be a workaholic.
              My family keeps me busy (and sane) during my free time which I enjoy spending with them or hiking.
              When I do get a fleeting spell of "alone time" I enjoy reading or experimenting with new technologies.
              Some of my favorite books are &nbsp;
              <i>Surely You're Joking Mr. Feynman</i>, <i>What Do You Care What Other People Think</i> (I'm a Feynman fan)
              , <i>The Pragmatic Programmer</i>, and <i>Moonwalking with Einstein</i>
            </Col>
            <Col sm={6} md={5}>
            <img id="hiking" src={process.env.PUBLIC_URL + "/hiking.JPG"} alt="Hiking around the desert" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export {About};
