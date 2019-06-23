import React from "react";
import { Paper, TextField, Button, Grid, makeStyles } from "@material-ui/core";
import API from "../Api";
import Books from "./Books";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: [],
      showBooks: false
    };
  }

  handleSearch = query => this.setState({ query });
  getBooks = () => {
    const search = this.state.query;
    API.getBooks(search).then(books => {
      const volumeInfo = books.items.map(books => books.volumeInfo);
      this.setState({ books: volumeInfo, showBooks: true });
    });
  };

  render() {
    const { showBooks } = this.state;
    const classes = makeStyles(theme => ({
      root: {
        padding: theme.spacing(0)
      }
    }));

    return (
      <React.Fragment>
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
                onChange={e => this.handleSearch(e.target.value)}
              />
              <Button
                variant="outlined"
                color="primary"
                size="large"
                style={{ marginTop: 10, height: 55 }}
                onClick={e => this.getBooks()}
              >
                Search
              </Button>
            </Paper>
          </Grid>
        </Grid>
        {showBooks ? <Books bookList={this.state.books} /> : null}
        {/* {showBooks ? console.log(this.state.books) : null} */}
      </React.Fragment>
    );
  }
}

export default Dashboard;
