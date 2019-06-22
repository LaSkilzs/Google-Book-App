import React from "react";
import Dashboard from "./Dashboard";
import Book from "../presentational/Book";
import "./css/App.css";
import { Header, Footer } from "../components/layouts/index";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Google Api</h1>
        <Dashboard />
        <Book />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
