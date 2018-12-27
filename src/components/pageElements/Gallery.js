import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';
import Grid from '../Grid';


class Gallery extends React.Component {

  render () {
    const { height, galleryContent } = this.props;

    return(
      <div style={localStyles.container}>
        <Grid
          galleryContent={galleryContent}
          height={height}
        />
        <div>Controll pannel for grid</div>
      </div>
    )
  }
}


const localStyles = {
  container: { 
    display: 'flex',
    flexDirection: 'column',
    justifyContnt: 'space-between',
    alignItems: 'center',
    height: 900,
    backgroundColor: Styles.colours.offWhite
  },
};

  
export default Radium(Gallery);