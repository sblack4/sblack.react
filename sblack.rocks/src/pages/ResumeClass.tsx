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
    return (
    <Row className="flexRow itemRow">
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

export {ResumeItemTitle, ResumeItemBody};
