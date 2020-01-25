import React, { Component } from "react";
import Die from "./Die";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Die face='five'/>
        <Die face='four'/>
        <Die face='three'/>
        <Die face='two'/>
        <Die face='one'/>
      </div>
    );
  }
}

export default App;