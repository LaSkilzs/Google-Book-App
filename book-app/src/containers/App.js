import React from "react";
import Dashboard from "./Dashboard";
import "./css/App.css";
import { Header, Footer } from "../components/layouts/index";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        {/* <Book /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
