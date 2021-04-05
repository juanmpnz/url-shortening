import React from "react";
import { Col, Row } from "react-bootstrap";

function SearchComponent({ handleChange, handleSubmit, spinner, error }) {
  return (
    <form onSubmit={handleSubmit}>
      <Row className="search-container">
        <Col
          md={9}
          sm={12}
          className={error ? "search-input-error" : "search-input"}
        >
          <input
            type="search"
            id="site-search"
            name="q"
            placeholder="Shorten a link here..."
            aria-label="Search through site content"
            onChange={handleChange}
          ></input>
        </Col>

        <Col md={3} sm={12} className="search-btn">
          <input
            type="submit"
            value="Shorten it!"
            style={spinner ? { display: "none" } : null}
          />
          {spinner ? <span className="spinner"></span> : null}
        </Col>
        <Row>
          {error ? (
            <div className="msajeerror">
              <i>Please add a link</i>
            </div>
          ) : null}
        </Row>
      </Row>
    </form>
  );
}

export default SearchComponent;
