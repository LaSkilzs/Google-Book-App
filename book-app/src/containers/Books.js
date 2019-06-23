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

const Books = bookLists => {
  function FormRow() {
    return (
      <React.Fragment>
        {bookLists.bookList.map(book => {
          console.log(book);
          return (
            <Grid item xs={4}>
              <Card>
                <CardHeader
                  title={book.title}
                  subheader={book.authors.map(author => author)}
                  // {book.publisher}
                />
                <CardMedia
                  image={book.imageLinks.smallThumbnail}
                  style={{ height: 170, width: 100, margin: "auto" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <Link href={book.infoLink} color="inherit">
                      {"see more info"}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default Books;
