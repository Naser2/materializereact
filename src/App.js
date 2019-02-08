import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from './Typography';
import Card from './Card';
import BreadcrumbsAndFooter from './BreadcrumbsAndFooter';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography />
        <Card/>
        <BreadcrumbsAndFooter/>
   
          <img src={logo} className="App-logo" alt="logo" />
         
      </div>
    );
  }
}

export default App;
