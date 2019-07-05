import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  breakpoints,
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: pxToRem(32),
        margin: "auto",
        [breakpoints.up("sm")]: {
          fontSize: pxToRem(48),
          margin: 0
        }
      }
    }
  }
});

const Header = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary" style={{ marginBottom: 10 }}>
        <Toolbar>
          <Typography variant="h3" color="inherit">
            Google Books
          </Typography>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
};

export default Header;
