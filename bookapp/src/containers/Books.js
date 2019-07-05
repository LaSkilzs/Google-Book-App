import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Link
} from "@material-ui/core";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  breakpoints,
  overrides: {
    MuiCard: {
      root: {
        margin: "auto",
        [breakpoints.up("sm")]: {
          margin: 0
        }
      }
    }
  }
});

const Books = props => {
  function FormRow() {
    return (
      <React.Fragment>
        {props.bookLists.map(book => {
          return (
            <Grid item xs={12} sm={6} md={4} key={book.infoLink}>
              <MuiThemeProvider theme={theme}>
                <Card>
                  {book.authors ? (
                    <CardHeader
                      title={book.title}
                      subheader={book.authors.map(author => author)}
                    />
                  ) : (
                    <CardHeader title={book.title} />
                  )}

                  {book.publisher ? (
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {book.publisher}
                      </Typography>
                    </CardContent>
                  ) : null}

                  {book.imageLinks ? (
                    <CardMedia
                      image={book.imageLinks.smallThumbnail}
                      style={{ height: 170, width: 100, margin: "auto" }}
                    />
                  ) : (
                    <CardMedia
                      image="https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg"
                      style={{ height: 170, width: 100, margin: "auto" }}
                    />
                  )}

                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Link
                        href={book.infoLink}
                        color="inherit"
                        onClick={() => props.handleRefresh()}
                      >
                        {"see more info"}
                      </Link>
                    </Typography>
                  </CardContent>
                </Card>
              </MuiThemeProvider>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <div>
      <Grid container style={{ marginTop: 20 }}>
        <Grid container spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default Books;
