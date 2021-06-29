import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:8082/auth/loggedIn");
    // const loggedInRes = await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/auth/loggedIn"
    // );
    setLoggedIn(loggedInRes.data);
    console.log(`log`, loggedIn);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
  props.history.push("/");
}

export default AuthContext;
export { AuthContextProvider };
