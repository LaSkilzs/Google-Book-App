import React from "react";
import {
  Paper,
  Button,
  Grid,
  makeStyles,
  Chip,
  Avatar
} from "@material-ui/core";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
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
    if (localStorage.books !== undefined && this.state.refresh) {
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

    const breakpoints = createBreakpoints({});
    const theme = createMuiTheme({
      breakpoints,
      overrides: {
        MuiInputBase: {
          input: {
            minWidth: "80vw",
            textAlign: "center",
            margin: "auto",
            fontSize: "1.3rem",
            padding: "1.5rem",
            [breakpoints.up("sm")]: {
              minWidth: 300,
              margin: 8
            }
          }
        },
        MuiButton: {
          sizeLarge: {
            width: "100%",
            fontSize: "1.5rem",
            [breakpoints.up("sm")]: {
              width: "100px",
              padding: "8px 24px",
              fontSize: "1rem"
            }
          }
        },
        MuiPaper: {
          rounded: {
            width: "85vw",
            [breakpoints.up("sm")]: { width: 600 }
          }
        }
      }
    });

    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                className={classes.root}
                style={{
                  padding: 10,
                  margin: "auto",
                  marginTop: 100
                }}
              >
                <InputBase
                  type="search"
                  id="filled-full-width"
                  placeholder="Search for Book by Title"
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
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default Dashboard;
