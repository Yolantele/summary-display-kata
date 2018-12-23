import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';


const Footer = (props) => {
   
  return(
    <div style={localStyles.container}>
    </div>
  )
}


const localStyles = {
  container: { 
    display: 'flex',
    justifyContnt: 'space-around',
    alignItems: 'center',
    height: 300,
    backgroundColor: Styles.colours.darkGrey
  },
};

  
export default Radium(Footer);