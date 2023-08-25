import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";

export default function FormModal({ children, handleFormClose, openForm }) {
  const loginSuccess = useSelector((state) => state.loginData.loginSuccess);
  return (
    <>
      {loginSuccess === "" && (
        <Dialog
          open={openForm}
          onClose={handleFormClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <>{children}</>
        </Dialog>
      )}
    </>
  );
}
