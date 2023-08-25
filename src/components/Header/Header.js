import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import logo from "../../assets/logo.svg";
import LoginNotification from "../LoginNotification/LoginNotification";
import FormModal from "../FormModal/FormModal";
import Login from "../Login/Login";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const isAuth = useSelector((state) => state.loginData.isAuth);

  const [open, setOpen] = React.useState(false);
  const [openLoginForm, setLoginFormOpen] = React.useState(false);
  const handleLoginFormClose = () => {
    setLoginFormOpen(false);
  };

  const handleBadgeClick = () => {
    if (isAuth.isAuth === true) {
      alert("you are already logged in");
    } else {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleLogin = () => {
    setLoginFormOpen(true);
  };

  // React.useEffect(() => {
  //   const bageCount = window.localStorage.getItem("item");
  //   setbadgeCount(bageCount);
  // }, [badgeCount]);
  return (
    <>
      <div className="topnav container-fluid" id="myTopnav">
        <div className="row">
          <div className="col-4">
            <Link to="/" className="active link">
              Home
            </Link>
            <NavLink className="link" to="/">
              News
            </NavLink>
            <NavLink className="link" to="/">
              Contact
            </NavLink>
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="col-4 text-center">
            <div className="title">
              <img src={logo} alt="logo" />{" "}
            </div>
          </div>
          <div className="col-4">
            <div className="row justify-content-end">
              <div className="col-8">
                <span className="icons link">
                  <SearchIcon />
                </span>
                <span className="icons link" onClick={handleLogin}>
                  <Person2OutlinedIcon />
                </span>
                <span className="icons link" onClick={handleBadgeClick}>
                  <Badge badgeContent={1} color="primary">
                    <AddShoppingCartIcon color="action" />
                  </Badge>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginNotification
        handleClose={handleClose}
        open={open}
        handleClick={handleBadgeClick}
      />
      <FormModal
        openForm={openLoginForm}
        handleFormClose={handleLoginFormClose}
      >
        <Login />
      </FormModal>
    </>
  );
}
