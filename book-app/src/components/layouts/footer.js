import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

const footer = props => {
  return (
    <Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
        // style={{
        //   position: "fixed",
        //   bottom: 30,
        //   height: 30,
        //   width: 1000,
        //   padding: 20
        // }}
        style={{ marginTop: 50 }}
      >
        <Tab label="Home" />
        <Tab label="Favorites" />
        <Tab label="Login" />
      </Tabs>
    </Paper>
  );
};

export default footer;
