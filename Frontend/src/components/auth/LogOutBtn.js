import axios from "axios";
import React, { useContext } from "react";
// import { useHistory } from "react-router";

import AuthContext from "../../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  //   const history = useHistory();
  async function logOut() {
    await axios.get("http://localhost:8082/auth/logout");
    // await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/auth/logout"
    // );
    await getLoggedIn();
    // this.props.history.push("/");
  }
  async function loggingOut() {
    await logOut();
    window.location.href = "http://localhost:3000/login";
  }
  return <button onClick={loggingOut}>Log out</button>;
}

export default LogOutBtn;
