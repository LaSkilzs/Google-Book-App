import React from "react";
import Dashboard from "./Dashboard";
import Book from "../presentational/Book";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <h1>Google Api</h1>
      <Dashboard />
      <Book />
    </div>
  );
}

export default App;
