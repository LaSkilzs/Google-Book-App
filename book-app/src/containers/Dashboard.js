import React from "react";
import { Paper, TextField, Button, Grid, makeStyles } from "@material-ui/core";

class Dashboard extends React.Component {
  render() {
    const classes = makeStyles(theme => ({
      root: {
        padding: theme.spacing(0)
      }
    }));

    return (
      <Grid container spacing={3}>
        <Grid item md>
          <Paper
            className={classes.root}
            style={{
              padding: 10,
              margin: "auto",
              marginTop: 25,
              width: 450
            }}
          >
            <TextField
              id="filled-full-width"
              style={{ margin: 8, width: 300 }}
              placeholder="search for books"
              margin="normal"
              variant="filled"
            />
            <Button
              variant="outlined"
              color="primary"
              size="large"
              style={{ marginTop: 10, height: 55 }}
            >
              Search
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;
