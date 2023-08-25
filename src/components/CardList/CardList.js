import React from "react";
import "./CardList.css";
import { getUserDetails } from "../../features/login/loginSlice";
import { useDispatch } from "react-redux";

export default function CardList({ bgImage, backgroundColor, text }) {
  const dispatch = useDispatch();
  // console.log(bgImage, "sdajkdjaksdja");
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="cx-card"
      style={style}
      onClick={() => dispatch(getUserDetails())}
    >
      <div className="cx-body">{text}</div>
    </div>
  );
}
