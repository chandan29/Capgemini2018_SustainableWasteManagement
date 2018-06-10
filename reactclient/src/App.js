import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileInput from 'simple-react-file-uploader';
import * as API from './api/API';

class App extends Component {

  handleChange(req){
    var payload={file:req};
    API.sendFile(payload)
    .then(res=>{
      console.log(res);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
            <FileInput
       multiple={true}
       onChange = {this.handleChange}
       accept="image/*"
     />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
