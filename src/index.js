import React, { useState, createContext } from "react";
import { BrowserRouter, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { render } from "react-dom";

import "./assets/index.scss";
import App from './App';

export const UserContext = createContext();

const Root = () => {
  const [users, setUsers] = useState({});

  return (
    <UserContext.Provider value={{ users, setUsers }}>
        <BrowserRouter>
        <Route path="/" component={App} />
        </BrowserRouter>
    </UserContext.Provider>
  );
};

export default render(<Root />, document.getElementById("root"));


