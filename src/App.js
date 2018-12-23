import React, { Component } from 'react';
import Radium from 'radium';
import Page from './components/pageElements/Page';


import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <Page/>
      </>
    );
  }
}

export default Radium(App);
