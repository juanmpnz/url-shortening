import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import Recognition from "../images/icon-brand-recognition.svg";
import Detailed from "../images/icon-detailed-records.svg";
import Customizable from "../images/icon-fully-customizable.svg";

import { CopyToClipboard } from "react-copy-to-clipboard";

function HomeComponent({ local, switchSearch, setSwitchSearch }) {
  const [copy, setCopy] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    localStorage.setItem("links", "[]");
    setSwitchSearch(!switchSearch);
  };
  const handleCopy = () => {
    setCopy(true);
    return setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <>
      {local
        ? local.map((e, i) => {
            return (
              <div key={i}>
                <Row className="show-links-row">
                  <Col className="url" md={7} sm={12}>
                    {e.originalLink}
                  </Col>
                  <Col className="url-short" md={3} sm={12}>
                    {e.shortLink}
                  </Col>
                  <Col className="url-btn" md={2} sm={12}>
                    <CopyToClipboard text={e.shortLink} onCopy={handleCopy}>
                      <button>Copy</button>
                    </CopyToClipboard>
                  </Col>
                </Row>
              </div>
            );
          })
        : null}
      <Row>
        <Col
          style={copy ? null : { display: "none" }}
          className="url-short"
          md={12}
          sm={12}
        >
          <div className="alert-copy">Copied!</div>
        </Col>
      </Row>
      {local.length !== 0 ? (
        <Row className="btn-delete">
          <button className="btn-delete-local" onClick={handleDelete}>
            Clear
          </button>
        </Row>
      ) : null}
      <Row>
        <Col className="advanced-stat" md={12} sm={12}>
          <h1>Advanced Statistics</h1>
          <p>
            Tranck how your links are performing across the web with our
            advanced statics dashboard.
          </p>
        </Col>
      </Row>
      <Row className="info-container">
        <Col className="item-one" md={3} sm={12}>
          <div className="circle">
            <img src={Recognition} alt="Recognition" />
          </div>
          <h5>Brand Recognition</h5>
          <p>
            Boost your brand recognition with each click. Generic links don`t
            mean a thing.Branded Links help instil confidence in your content.
          </p>
        </Col>
        <Col className="item-two" md={3} sm={12}>
          <div className="circle">
            <img src={Detailed} alt="Detailed" />
          </div>

          <h5>Detailed Records</h5>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content hepls inform better decisions.
          </p>
        </Col>
        <Col className="item-tree" md={3} sm={12}>
          <div className="circle">
            <img src={Customizable} alt="Customizable" />
          </div>
          <h5>Fully Customizable</h5>
          <p>
            Improve brand awareness and content descoverability through
            customizable links, supercharging audience engegement.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default HomeComponent;
