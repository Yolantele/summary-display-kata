import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';
import Grid from '../Grid';
import Controlls from '../Controlls';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      totalSlides: 5,
      slide: 0,
    };
  }

  onDetermineSlideCount(content, contentLength=10){
    return (content.length / contentLength) - 1 ;
    
  }

  componentWillMount(){
    this.setState({
      totalSlides: this.onDetermineSlideCount(this.props.galleryContent)
    });
  }

  onNextSlide(){
    let { slide, totalSlides } = this.state;

    if (slide < totalSlides){
      this.setState({
        slide: slide +1
      })
    }
  }

  onPrevSlide(){
    if (this.state.slide > 0){
      this.setState({
        slide: this.state.slide -1
      })
    }
  }

  onLimitGallery(content, index, contentLength=10){
    let startOfMember;
    let endOfMember;
    if (index === 0) {
      startOfMember = 0;
      endOfMember = contentLength;
    }
    else {
      startOfMember = index * contentLength - 1; 
      endOfMember = (index * contentLength + contentLength) - 1;
    }
    return content.slice(startOfMember, endOfMember)
  }

  render () {
    const { height, galleryContent } = this.props;

    let limitedGallery = this.onLimitGallery(galleryContent, this.state.slide);
    

    return(
      <div style={localStyles.container}>
        <Grid
          galleryContent={limitedGallery}
          height={height}
        />
        <Controlls 
          rightClick={() => {this.onNextSlide()}}
          leftClick={() => {this.onPrevSlide()}}
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