import React from "react";
import { Col, Row } from "react-bootstrap";

//social icons
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Printerest from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <>
      <Row>
        <Col className="prefooter">
          <h3>Boost your links today</h3>
          <button className="btn">Get Started</button>
        </Col>
      </Row>
      <Row className="footer">
        <Col className="logo-footer" md={3} sm={12}></Col>
        <Col className="links-footer" md={2} sm={12}>
          <h6>Features</h6>
          <p>Link Shortering</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </Col>
        <Col className="links-footer" md={2} sm={12}>
          <h6>Resources</h6>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </Col>
        <Col className="links-footer" md={2} sm={12}>
          <h6>Complany</h6>
          <p>About</p>
          <p>Our Team</p>
          <p>Contact</p>
        </Col>
        <Col className="social-footer" md={2} sm={12}>
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Printerest} alt="Printerest" />
          <img src={Instagram} alt="Instagram" />
        </Col>
      </Row>
    </>
  );
}

export default Footer;
