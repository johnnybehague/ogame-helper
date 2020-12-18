import React from "react";
import CustomToolbar from "./CustomToolbar";
import AppBar from "@material-ui/core/AppBar";

const CustomAppbar = () => {
  <AppBar
    position="absolute"
    className={clsx(classes.appBar, open && classes.appBarShift)}
  >
    <CustomToolbar />
  </AppBar>;
};

export default CustomAppbar;
