import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Book = () => {
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper>book</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>book</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>book</Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default Book;
