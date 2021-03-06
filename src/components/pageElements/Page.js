
import React, { Component } from 'react';
import Radium from 'radium';
import Styles from '../../assets/styles';
import Header from './Header';
import Footer from './Footer';
import GalleryContainer from '../containers/GalleryContainer';
import {  StyleRoot } from 'radium';


class Page extends Component {
  render() {
    return (
      <StyleRoot style={localStyles.mainContainer}>
        <div style={localStyles.container}>
          <Header/>
          <GalleryContainer/>
          <Footer/>
        </div>
      </StyleRoot>
    );
  }
}

const localStyles = {
  mainContainer: { 
    display: 'flex',
    flexDirection: 'row',
    fontFamily: Styles.font
  },
  container: {
    width: '100vw',
    height: '100vh',
    overflowY: 'scroll'
  }
};

export default Radium(Page);
