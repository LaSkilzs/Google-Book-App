import React from "react";
import Dashboard from "./Dashboard";
import "./App.css";
import Header from "../components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ background: "fixed" }}>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
