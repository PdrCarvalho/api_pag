import React, { Component } from 'react';
import Header from "./component/Header/index"
import Main from "./pages/main/index"
import "./styles.css"
import api from "./service/api"
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Main/>
      </div>
    );
  }
}

export default App;
