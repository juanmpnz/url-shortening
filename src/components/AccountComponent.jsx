import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

function AccountComponent() {
  const history = useHistory();
  const [userL, setUserL] = useState([]);
  const [copy, setCopy] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get("/api/link/" + id).then((links) => {
      setUserL(links.data);
    });
  }, []);

  const handleCopy = () => {
    setCopy(true);
    return setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <div className="account-container">
      <h3>My shortened links </h3>
      <Col
        style={copy ? null : { display: "none" }}
        className="url-short"
        md={12}
        sm={12}
      >
        <div className="alert-copy">Copied!</div>
      </Col>
      {userL.length !== 0 ? (
        userL.map((e, i) => {
          return (
            <div key={i}>
              <Row className="show-links-row">
                <Col className="url" md={7} sm={12}>
                  {e.origilianLink}
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
      ) : (
        <h1 style={{ textAlign: "center" }}>Dont have links</h1>
      )}
      <button className="btn1" onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
}

export default AccountComponent;
