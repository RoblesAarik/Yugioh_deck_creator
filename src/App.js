import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/CardList";
//import { BrowserRouter, Route, Switch } from "react-router-dom";

class RenderRoutes extends React.Component {
  render() {
    return (
      <div>
        <div>{/* routes will go here */}</div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Create your deck</h1>
        <h2> Popular Cards </h2>
        {/* Populate featured cards here */}
        <CardList></CardList>
      </div>
    );
  }
}
export default App;
