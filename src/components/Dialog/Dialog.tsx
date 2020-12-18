import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "./DialogTitle";
import DialogContent from "./DialogContent";
import DialogActions from "./DialogActions";

type DialogProps = {
  title: string;
  texts: string[];
  buttonText: string;
  onCloseHandler: any;
  open: boolean;
};

export default function CustomDialog({
  title,
  texts,
  buttonText,
  onCloseHandler,
  open
}: DialogProps) {
  return (
    <Dialog
      onClose={onCloseHandler}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={onCloseHandler}>
        {title}
      </DialogTitle>
      <DialogContent dividers>
        {texts.map((text) => (
          <Typography gutterBottom>{text}</Typography>
        ))}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCloseHandler} color="primary">
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
