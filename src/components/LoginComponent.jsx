import React, { useState, useContext } from "react";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Ilustration from "../images/illustration-working.svg";

import { UserContext } from "../index";

import axios from "axios";

function LoginComponent() {
  const { setUsers } = useContext(UserContext);
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passError: "",
    logErr: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const {
      target,
      target: { id },
    } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setUser({ ...user, [id]: value });
  };

  const validate = () => {
    let emailErr = "";
    let passErr = "";

    if (!user.email.includes("@" && ".")) {
      emailErr = "Invalid E-mail";
      setError({ ...error, emailError: emailErr });
    }
    if (user.password.length < 3) {
      passErr = "Password must be 6 or more characters";
      setError({ ...error, passError: passErr });
    }

    if (passErr) {
      return true;
    }
    if (emailErr) {
      return true;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validate();
    if (isValid) {
      setTimeout(() => {
        setError({ emailError: "", passError: "" });
      }, 2500);
    }
    console.log("login attempt...");
    try {
      const { data } = await axios.post("/api/user/login", {
        email: user.email,
        password: user.password,
      });
      setUsers(data);
      console.log(`logged user ${data.email}`);
      history.push("/");
    } catch ({ response }) {
      if ({ response }) {
        setError({ ...error, logErr: "User no exist" });
        setTimeout(() => {
          setError({ emailError: "", passError: "" });
        }, 2500);
        return response.status && response.statusText;
      }
    }
  };
  return (
    <>
      <Row className="signup">
        <form>
          <div>
            <p>
              <label id="email">E-mail : </label>
              <input
                form={user}
                type="text"
                id="email"
                onChange={handleChange}
              />
            </p>
            {error.emailError === "" ? null : (
              <div
                style={{
                  color: "red",
                  fontSize: "small",
                  textAlign: "end",
                  marginTop: -15,
                }}
              >
                {error.emailError}
              </div>
            )}
            {error.logErr === "" ? null : (
              <div
                style={{
                  color: "red",
                  fontSize: "small",
                  textAlign: "end",
                  marginTop: -15,
                }}
              >
                {error.logErr}
              </div>
            )}

            <p>
              <label id="password"> Password : </label>
              <input type="password" id="password" onChange={handleChange} />
            </p>
            {error.passError === "" ? null : (
              <div
                style={{
                  color: "red",
                  fontSize: "small",
                  textAlign: "end",
                  marginTop: -15,
                }}
              >
                {error.passError}
              </div>
            )}
            <p>
              <input
                type="submit"
                value="Login"
                className="btn"
                onClick={handleSubmit}
              />
            </p>
          </div>
        </form>
      </Row>
      <div className="end">
        <img src={Ilustration} alt="Ilustration"></img>
      </div>
    </>
  );
}

export default LoginComponent;
