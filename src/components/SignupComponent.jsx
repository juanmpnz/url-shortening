import axios from "axios";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Ilustration from "../images/illustration-working.svg";

function SignupComponent() {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passError: "",
    nameError: "",
    lastNameError: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const id = event.target.id;
    const value = event.target.value;
    if (id === "first_name") setUser({ ...user, name: value });
    if (id === "last_name") setUser({ ...user, lastname: value });
    if (id === "email") setUser({ ...user, email: value });
    if (id === "password") setUser({ ...user, password: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validate();
    if (isValid) {
      return setTimeout(() => {
        setError({ emailError: "", passError: "" });
      }, 2500);
    } else {
      axios
        .post("/api/user/register", user)
        .then((u) => {
          console.log("created", u);
          history.push("/login");
        })
        .catch((e) => e);
    }
  };

  const validate = () => {
    let emailErr = "";
    let passErr = "";
    let nameErr = "";
    let lastNameErr = "";

    if (!user.email.includes("@" && ".")) {
      emailErr = "Invalid E-mail";
      setError({ ...error, emailError: emailErr });
    }
    if (user.password.length < 3) {
      passErr = "Password must be 6 or more characters";
      setError({ ...error, passError: passErr });
    }
    if (user.name === "") {
      nameErr = "Name cannot be empty";
      setError({ ...error, nameError: nameErr });
    }

    if (user.lastname === "") {
      lastNameErr = "Last Name cannot be empty";
      setError({ ...error, lastNameError: lastNameErr });
    }

    if (passErr) {
      return true;
    }
    if (emailErr) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Row className="signup">
        <form action="#">
          <div>
            <p>
              <label id="first name">First Name : </label>
              <input type="text" id="first_name" onChange={handleChange} />
            </p>
            {error.nameError === "" ? null : (
              <div
                style={{
                  color: "red",
                  fontSize: "small",
                  textAlign: "end",
                  marginTop: -15,
                }}
              >
                {error.nameError}
              </div>
            )}
            <p>
              <label id="last name"> Last name : </label>
              <input type="last_name" id="last_name" onChange={handleChange} />
            </p>
            {error.lastNameError === "" ? null : (
              <div
                style={{
                  color: "red",
                  fontSize: "small",
                  textAlign: "end",
                  marginTop: -15,
                }}
              >
                {error.lastNameError}
              </div>
            )}
            <p>
              <label id="email">E-mail : </label>
              <input type="email" id="email" onChange={handleChange} />
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
                value="Register"
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

export default SignupComponent;
