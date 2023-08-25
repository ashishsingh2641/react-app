import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./components/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorageData } from "./features/login/loginSlice";
// import ChildComponent from "./childComponent";

const LoginComponent = () => {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <div>
      <Login />
      {/* <ChildComponent ref={ref} value="test" /> */}
      {/* <button onClick={() => ref.current.f1()}>click</button> */}
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.loginData.isAuth);
  console.log(isAuth, "isAuth obj");

  console.log(isAuth, "isAuth from redux");
  return (
    <Routes>
      {isAuth === true ? (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </>
      ) : (
        <Route path="/" element={<LoginComponent />} />
      )}
    </Routes>
  );
};

export default App;
