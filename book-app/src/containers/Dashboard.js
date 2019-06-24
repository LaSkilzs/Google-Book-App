import React from "react";
import {
  Paper,
  Button,
  Grid,
  makeStyles,
  Chip,
  Avatar
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import FaceIcon from "@material-ui/icons/Face";
import API from "../Api";
import Books from "./Books";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: [],
      showBooks: false,
      errors: [],
      errorMessage: false
    };
  }
  handleSearch = query => this.setState({ query });
  getBooks = () => {
    const search = this.state.query;
    API.getBooks(search).then(books => {
      if (books.error) {
        this.setState({
          errors: books.error.message,
          errorMessage: true,
          query: ""
        });
        setTimeout(() => this.setState({ errorMessage: false }), 5000);
      } else {
        const volumeInfo = books.items.map(books => books.volumeInfo);
        this.setState({ books: volumeInfo, showBooks: true, query: "" });
      }
    });
  };

  render() {
    const { showBooks, errorMessage } = this.state;
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
              <InputBase
                type="search"
                id="filled-full-width"
                style={{ margin: 8, width: 300 }}
                placeholder=""
                variant="filled"
                value={this.state.query}
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
              {errorMessage ? (
                <Chip
                  avatar={
                    <Avatar>
                      <FaceIcon />
                    </Avatar>
                  }
                  label="no results found"
                  color="secondary"
                  variant="outlined"
                />
              ) : null}
            </Paper>
          </Grid>
        </Grid>
        {showBooks ? <Books bookLists={this.state.books} /> : null}
      </React.Fragment>
    );
  }
}

export default Dashboard;
