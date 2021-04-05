import React from "react";
import { Col, Row } from "react-bootstrap";

import Ilustration from "../images/illustration-working.svg";

function Banner() {
  return (
    <div>
      <Row>
        <Col md={6} sm={12} className="images-responsive">
          <img src={Ilustration} alt="Ilustration"></img>
        </Col>
        <Col md={6} sm={12} className="text">
          <h1>
            More than just <br />
            shorter links
          </h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <br />
          <div className="btn a">Get Started</div>
        </Col>
        <Col md={6} sm={12} className="images ">
          <img src={Ilustration} alt="Ilustration"></img>
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
