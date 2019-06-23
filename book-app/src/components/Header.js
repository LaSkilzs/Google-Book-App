import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = props => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h3" color="inherit">
          Google Books API
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
