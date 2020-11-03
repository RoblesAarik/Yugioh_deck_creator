import logo from "./logo.svg";
import "./App.css";
import { ReactComponent } from "*.svg";

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
      </div>
    );
  }
}
export default App;
