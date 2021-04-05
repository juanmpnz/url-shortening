import React, { useContext } from "react";
import Menu from "../components/Menu";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { UserContext } from "../index";

function NavContainer() {
  const history = useHistory();
  const { users, setUsers } = useContext(UserContext);

  const handleLogout = async () => {
    console.log("logout attempt...");
    try {
      await axios.post("/api/user/logout");
      setUsers({});
      console.log("logged out");
      history.push("/");
    } catch ({ response }) {
      console.log(response.status, response.statusText);
    }
  };
  return (
    <div>
      <Menu handleLogout={handleLogout} currentUser={users} />
    </div>
  );
}

export default NavContainer;
