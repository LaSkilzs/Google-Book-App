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
      disabled: true,
      errors: [],
      errorMessage: false
    };
  }
  handleSearch = query => {
    if (query.length > 0) {
      this.setState({ query, disabled: false });
    } else if (query.length === 0) {
      this.setState({ query, disabled: true });
    } else {
      this.setState({ query });
    }
  };

  handleEnter = enter => {
    if (enter === "Enter") {
      this.setState({ disabled: true });
      this.getBooks();
    }
  };

  getBooks = () => {
    const search = this.state.query;
    API.getBooks(search).then(books => {
      if (books.totalItems === 0) {
        this.setState({
          errorMessage: true,
          query: ""
        });
        setTimeout(
          () => this.setState({ errorMessage: false, disabled: true }),
          4000
        );
      } else {
        const volumeInfo = books.items.map(books => books.volumeInfo);
        this.setState({
          books: volumeInfo,
          showBooks: true,
          query: "",
          disabled: true
        });
        // localStorage["books"] = JSON.stringify(volumeInfo);
      }
    });
  };

  render() {
    // const bookresult = JSON.parse(localStorage["books"]);
    // console.log(bookresult);

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
                placeholder="Search for book by title"
                variant="filled"
                value={this.state.query}
                onChange={e => this.handleSearch(e.target.value)}
                onKeyPress={e => this.handleEnter(e.key)}
              />

              <Button
                variant="outlined"
                color="primary"
                size="large"
                disabled={this.state.disabled}
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
