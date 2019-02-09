import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from './components/Typography';
import Card from './components/Card';
import BreadcrumbsAndFooter from './components/BreadcrumbsAndFooter';
import Form from './components/Form';
import Paralax from './components/Paralax';
import Sidenav from './components/Sidenav';
import Scrollspy from './components/Scrollspy';
import Tabs from './components/Tabs';
// import PushPin from './components/PushPin'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography />
        <Card />
        <BreadcrumbsAndFooter />
        {/* <PushPin /> */}
        <Sidenav />
        <Paralax />
        <Scrollspy />
        <Tabs />
   
          <img src={logo} className="App-logo" alt="logo" />
         
      </div>
    );
  }
}

export default App;
