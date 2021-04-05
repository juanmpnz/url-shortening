import React, { useState } from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Logo from "../images/logo.svg";

function Menu({ currentUser, handleLogout }) {
  const history = useHistory();
  const [showburger, setShowBurger] = useState(false);
  return (
    <Row className="header-nav">
      <Col md={2} sm={12} className="logo">
        <img src={Logo} alt="Logo" onClick={() => history.push("/")} />
        <div className="nav-bar-mobile">
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <div className="burger"></div>
              <div className="burger"></div>
              <div className="burger"></div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="burger-container">
              <Dropdown.Item className="burger-item" href="#/action-3">
                Features
              </Dropdown.Item>
              <Dropdown.Item className="burger-item" href="#/action-2">
                Pricing
              </Dropdown.Item>
              <Dropdown.Item className="burger-item" href="#/action-3">
                Resources
              </Dropdown.Item>
              <Dropdown.Divider style={{ color: "red" }} />

              {currentUser.id ? (
                <Dropdown.Item className="burger-item" onClick={handleLogout}>
                  Logout
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  className="burger-item"
                  onClick={() => history.push("/login")}
                >
                  Login
                </Dropdown.Item>
              )}
              {currentUser.id ? (
                <Dropdown.Item
                  className="burger-item"
                  onClick={() => history.push("/account/" + currentUser.id)}
                >
                  Acconut
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  className="burger-item-signup"
                  onClick={() => history.push("/signup")}
                >
                  Sign Up
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
      <Col md={7} className="navbar">
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </Col>

      {currentUser.id ? (
        <Col md={3} className="nav-bar-end">
          <p onClick={handleLogout}>Logout</p>
          <p>
            <div
              className="btn"
              onClick={() => history.push("/account/" + currentUser.id)}
            >
              Account
            </div>
          </p>
        </Col>
      ) : (
        <Col md={3} className="nav-bar-end">
          <p onClick={() => history.push("/login")}>Login</p>
          <p>
            <div className="btn" onClick={() => history.push("/signup")}>
              Sign Up
            </div>
          </p>
        </Col>
      )}
    </Row>
  );
}

export default Menu;
