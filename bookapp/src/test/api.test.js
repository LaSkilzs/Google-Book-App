import React from "react";
import Api from "./__mocks_/Api";

it("can retrieve data from api", async () => {
  let query = true;
  const response = new Api();
  const data = await response.getBooks(query);

  expect(data.length).toEqual(1);
  expect(data[0].title).toBeTruthy();
  expect(data[0].authors.length).toEqual(2);
  expect(data[0].publisher).toBeTruthy();
  expect(data[0].imageLinks).toBeTruthy();
  expect(data[0].infoLink).toBeTruthy();
});

it("returns error message if query is invalid or returns no response", async () => {
  let query = false;
  const response = new Api();
  const data = await response.getBooks(query);

  expect(data.error).toEqual("search not found!");
});
