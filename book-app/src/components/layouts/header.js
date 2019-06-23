import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const header = props => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h3" color="inherit">
          Google Books
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default header;
