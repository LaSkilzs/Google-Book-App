import React from "react";
import { Paper, TextField, Button } from "@material-ui/core";

class Dashboard extends React.Component {
  render() {
    return (
      <Paper>
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="seacrh for books"
          margin="normal"
          variant="filled"
        />
        <Button variant="contained">Search</Button>
      </Paper>
    );
  }
}

export default Dashboard;
