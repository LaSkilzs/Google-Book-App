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
      refresh: localStorage.getItem("refresh") || false,
      errors: [],
      errorMessage: false
    };
  }

  componentDidMount() {
    if (this.state.refresh === "false") {
      localStorage.clear();
    }
    if (localStorage.books !== undefined) {
      this.setState({
        showBooks: !this.state.showBooks,
        books: JSON.parse(localStorage["books"])
      });
      localStorage.clear();
    }
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

  handleRefresh = () => {
    let refresh = true;
    localStorage.setItem("refresh", refresh);
  };

  getBooks = () => {
    const search = this.state.query;
    API.getBooks(search).then(books => {
      if (books.totalItems === 0) {
        localStorage.clear();
        this.setState({
          errorMessage: true,
          query: ""
        });
        setTimeout(
          () => this.setState({ errorMessage: false, disabled: true }),
          4000
        );
      } else {
        const volumeInfo = books.items
          .map(books => books.volumeInfo)
          .filter(
            book =>
              book.title.toLowerCase().replace(/\W/g, "") !==
              "missing title".replace(/\W/g, "")
          );

        localStorage["books"] = JSON.stringify(volumeInfo);
        let bookStorage = JSON.parse(localStorage["books"]);

        this.setState({
          books: bookStorage || [],
          showBooks: true,
          query: "",
          disabled: true
        });
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
          <Grid item xs={12}>
            <Paper
              className={classes.root}
              style={{
                padding: 10,
                margin: "auto",
                marginTop: 100,
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
        {showBooks ? (
          <Books
            bookLists={this.state.books}
            handleRefresh={this.handleRefresh}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Dashboard;
