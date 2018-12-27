import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';
import Grid from '../Grid';
import Controlls from '../Controlls';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      slide: 1
      
    };
  }
  onNextSlide(){
    alert("on slide " + this.state.slide)
  }

  render () {

    const { height, galleryContent } = this.props;

    return(
      <div style={localStyles.container}>
        <Grid
          galleryContent={galleryContent}
          height={height}
        />
        <Controlls 
          buttonClicked={(evt) => {this.onNextSlide(evt)}}
        />
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