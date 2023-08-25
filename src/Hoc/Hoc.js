import React from "react";
import Header from "../components/Header/Header";

const Hoc = (WrappedComponent) => (props) => {
  return (
    <>
      <Header />
      <WrappedComponent {...props} />
    </>
  );
};

export default Hoc;
