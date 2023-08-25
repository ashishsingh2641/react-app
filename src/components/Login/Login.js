import React, { useState, useEffect } from "react";
import Signup from "../Signup/Signup";
import { useSelector, useDispatch } from "react-redux";
import {
  triggerLogin,
  getLocalStorageData,
} from "../../features/login/loginSlice";

import "./Login.css";

export default function Login() {
  // login from data and events starts here

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [hideLoginComponent, sethideLoginComponent] = useState(false);
  const { token, refreshToken } = useSelector((state) => state.loginData);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const { email, password } = loginData;
  const dispatch = useDispatch();

  const handleloginSubmit = (e) => {
    e.preventDefault();
    debugger;
    dispatch(triggerLogin(loginData));
    dispatch(getLocalStorageData());
  };
  return (
    <>
      {hideLoginComponent === false ? (
        <div className="login">
          <div className="form mb-5 pb-0">
            <form className="login-form" onSubmit={handleloginSubmit}>
              <span className="material-icons">lock</span>
              <input
                type="text"
                placeholder="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={email}
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                name="password"
                onChange={handleChange}
                autoComplete="on"
              />
              <button>login</button>
            </form>
            <div>
              <button
                className="btn btn-link my-2 p-1"
                style={{
                  backgroundColor: "white",
                  color: "#4b6cb7",
                  outline: "none",
                }}
                onClick={() => sethideLoginComponent(!hideLoginComponent)}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Signup
            handleHideSignup={() => sethideLoginComponent(!hideLoginComponent)}
          />
        </>
      )}
    </>
  );
}
