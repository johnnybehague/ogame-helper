import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import useStyles from "./Dashboard.styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { mainListItems } from "./data";
const CustomSidebar = ({ clickHandler, open }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => clickHandler()}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <List></List>
      <Divider />
      {/* <List>{secondaryListItems}</List> */}
      <List></List>
    </Drawer>
  );
};

const propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func
};

const defaultProps = {};

CustomSidebar.propTypes = propTypes;
CustomSidebar.defaultProps = defaultProps;

export default CustomSidebar;
