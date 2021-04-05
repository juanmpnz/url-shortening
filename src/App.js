import React, {useEffect, useContext } from "react"
import axios from "axios"
import {Switch, Route} from "react-router-dom"
import { Container } from "react-bootstrap";

//containers
import HomeContainer from "./containers/HomeContainer"
import NavContainer from "./containers/NavContainer"

//components
import SignupComponent from "./components/SignupComponent"
import LoginComponent from "./components/LoginComponent"
import Footer from "./components/Footer"
import AccountComponent from "./components/AccountComponent"

//action creator
/* import {setUser} from "./redux/action-creators/users" */
import { UserContext } from "./index";

function App({location}) {
  const { setUsers } = useContext(UserContext);

  useEffect(() => {
  
    axios
      .get("/api/user/me")
      .then((res) => res.data)
      .then((user) => {
        setUsers(user);
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }, [setUsers]);

  return (
    <>
    <Container >
    <NavContainer/>
    <Switch>
           <Route exact path="/" render={()=><HomeContainer/>}></Route>
           <Route exact path="/signup" render={()=><SignupComponent/>}></Route>
           <Route exact path="/login" render={()=><LoginComponent/>}></Route>
           <Route  path="/account/:id" render={()=><AccountComponent/>}></Route>
       </Switch>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
