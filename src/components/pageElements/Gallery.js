import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';
import Grid from '../Grid';


class Gallery extends React.Component {

  render () {
    console.log('INSIDE THEGALLERY ---->');
    const { height, galleryContent } = this.props;
    console.log('-----> galleryContent', galleryContent);

    return(
      <div style={localStyles.container}>
        <Grid
          galleryContent={galleryContent}
          height={height}
        />
      </div>
    )
  }
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