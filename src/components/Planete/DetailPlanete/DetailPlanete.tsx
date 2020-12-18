import React from "react";
import Dialog from "./../../Dialog";

type DetailPlaneteProps = {
  onCloseHandler: any;
  open: boolean;
};

export default function DetailPlanete({
  onCloseHandler,
  open
}: DetailPlaneteProps) {
  const texts: string[] = ["Test", "Test"];

  return (
    <Dialog
      onClose={onCloseHandler}
      aria-labelledby="customized-dialog-title"
      open={open}
      title="Modal title"
      buttonTitle="Save changes"
      texts={texts}
    />
  );
}
