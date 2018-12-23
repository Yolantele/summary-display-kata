import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';


const Gallery = (props) => {
   
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
    height: 1000,
    backgroundColor: Styles.colours.offWhite
  },
};

  
export default Radium(Gallery);