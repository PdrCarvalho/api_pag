import React, { Component } from 'react';
import Header from "./component/Header/index"
import "./styles.css"
import api from "./service/api"
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
