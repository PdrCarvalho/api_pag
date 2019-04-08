import React, { Component } from 'react';
import Header from "./component/Header/index"
import "./styles.css"
import Routes from "./routes";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Routes/>
      </div>
    );
  }
}

export default App;
