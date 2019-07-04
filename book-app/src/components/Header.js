import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = props => {
  return (
    <AppBar position="fixed" color="primary" style={{ marginBottom: 10 }}>
      <Toolbar>
        <Typography variant="h3" color="inherit">
          Google Books API
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
