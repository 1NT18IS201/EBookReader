import Axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const history = useHistory();

  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
        password,
      };

      await Axios.post("http://localhost:8082/auth/login", loginData).catch(
        (err) => {
          console.log("Incorrect credentials");
        }
      );
      await getLoggedIn();

      console.log(loggedIn);
      setTimeout(function () {
        console.log(loggedIn);
      }, 1000);
      // console.log(log);
      // console.log(props);
      // props.history.push("/");
      if (loggedIn == true) {
        window.location.href = "http://localhost:3000/";
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className="CreateBook">
        <div className="col-md-8 m-auto">
          <br />
          <h1 className="display-4 text-center">Log In</h1>
        </div>
        <br />
        <br />
        <div className="col-md-7 m-auto">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <form onSubmit={login}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-outline-info btn-block mt-4"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loggedIn === true && (
        <>{(window.location.href = "http://localhost:3000/")}</>
      )}
    </div>
  );
}

export default Login;
