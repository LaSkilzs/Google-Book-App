import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

const footer = props => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Home" />
        <Tab label="Favorites" />
        <Tab label="Login" />
      </Tabs>
    </Paper>
  );
};

export default footer;
