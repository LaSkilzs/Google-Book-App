import React from "react";
import Dashboard from "./__mocks_/Dashboard";

it("doesn't return books that are missing titles", async () => {
  let query = "missing title";
  const response = new Dashboard();
  const data = await response.findTitles(query);
  console.log(data[0].title);
  expect(data.length).toEqual(1);
  expect(data[0].title).not.toMatch(/missing title/);
});
