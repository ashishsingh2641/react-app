import React, { useState, useEffect } from "react";

export default function Signup({ handleHideSignup }) {
  const [signUpdata, setLoginData] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...signUpdata, [e.target.name]: e.target.value });
  };

  const { fname, email, password, confirmPassword } = signUpdata;

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    console.log(signUpdata);
  };

  return (
    <div className="login">
      <div className="form mb-5 pb-0">
        <form className="login-form" onSubmit={handleSignupSubmit}>
          <span className="material-icons">lock</span>
          <input
            type="text"
            placeholder="name"
            required
            value={fname}
            name="fname"
            onChange={handleChange}
          />
          <input
            type="email"
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
            autocomplete="on"
          />
          <input
            type="password"
            placeholder="confirm password"
            required
            value={confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            autocomplete="on"
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
            onClick={handleHideSignup}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
