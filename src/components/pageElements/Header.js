import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';


const Header = (props) => {
   
  return(
    <div style={localStyles.container}>
      <div style={localStyles.header}/>
    </div>
  )
}


const localStyles = {
  container: { 
    display: 'flex',
    justifyContnt: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: Styles.colours.key

  },
  header: {
    font: Styles.font,
    color: Styles.colours.darkGrey,
    padding: 10
  }
};

  
export default Radium(Header);