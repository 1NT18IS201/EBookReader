import Axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

function Register() {
  const [email, setemail] = useState("");
  const [tier, settier] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVerify, setpasswordVerify] = useState("");

  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        tier,
        password,
        passwordVerify,
      };
      console.log(registerData);
      await Axios.post("http://localhost:8082/auth/register", registerData);
      getLoggedIn();
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
                <form onSubmit={register}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control"
                      onChange={(e) => setpasswordVerify(e.target.value)}
                      value={passwordVerify}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="radio"
                      name="Subcsription tier"
                      value="tier1"
                      id="tier1"
                      // className="form-control"
                      onChange={(e) => {
                        settier(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    <label for="tier1">Tier 1 - Fiction</label>
                    <br />
                    <input
                      type="radio"
                      name="Subcsription tier"
                      value="tier2"
                      id="tier2"
                      // className="form-control"
                      onChange={(e) => {
                        settier(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    <label for="tier2">Tier 2 - Non Fiction</label>
                    <br />
                    <input
                      type="radio"
                      name="Subcsription tier"
                      value="tier3"
                      id="tier3"
                      // className="form-control"
                      onChange={(e) => {
                        settier(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    <label for="tier3">Tier 3 - Education</label>
                    <br />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-info btn-block mt-4"
                  >
                    Register
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

export default Register;
