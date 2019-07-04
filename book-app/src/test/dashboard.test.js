import React from "react";
import Dashboard from "./__mocks_/Dashboard";

it("can retrieve data from api", async () => {
  let query = true;
  const response = new Dashboard();
  const data = await response.getBooks(query);

  expect(data.title).toBeTruthy();
  expect(data.authors.length).toEqual(2);
  expect(data.publisher).toBeTruthy();
  expect(data.imageLinks).toBeTruthy();
  expect(data.infoLink).toBeTruthy();
});

it("returns error message if query is blank", async () => {
  let query = false;
  const response = new Dashboard();
  const data = await response.getBooks(query);

  expect(data.errors).toBeTruthy();
});

it("returns error message if query is invalid", async () => {
  let query = 0;
  const response = new Dashboard();
  const data = await response.getBooks(query);

  expect(data.errors).toBeTruthy();
});
