import React from 'react';
import Styles from '../assets/styles';
import Radium from 'radium';

const CHAR_LENGTH = 100;
const CARD_SIZE_TO_TEXT_PROPORTION = 2.5;
const CARD_SIZE_TO_TITLE_PROPORTION = 7;
const RATIO = 7.9;

class Card extends React.Component {

  render () {
    const { card, height, width, screenWidth } = this.props;

    const cardStyle = [localStyles.container];

    let lengthOfDescription = CHAR_LENGTH;
    let lengthOfTitle = CHAR_LENGTH / 2 ;

    if (height) cardStyle.push({height: height});

    if (width || screenWidth) {
      let setWidth;
      if (screenWidth) setWidth = screenWidth / RATIO;
      else setWidth = width;

      lengthOfDescription = setWidth /CARD_SIZE_TO_TEXT_PROPORTION;
      lengthOfTitle = setWidth /CARD_SIZE_TO_TITLE_PROPORTION;
    }

    
    
    let title = `${card.name} - ${card.address1}`;
    let description = `${card.listing_text}`;
    let details = `${card.city}, ${card.postcode}`;

    if (title.length > lengthOfTitle) title = title.substring(0, lengthOfTitle) + '...';
    if (description.length > lengthOfDescription) {
      description = description.substring(0, lengthOfDescription) + '...'
    }
  
    return(
      <div 
        style={cardStyle} 
        alt={card.id} 
        key={card.id}
        onClick={() => {alert(card.listing_text)}} 
      >
        <h3 style={localStyles.header}>{title}</h3>
        <h5 style={localStyles.texts}>{description}</h5>
        <h5 style={localStyles.texts}>{details}</h5>
      </div>
    )
    
  }
}

const localStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: Styles.colours.white,
    padding: 35,
    margin: 5, 
    borderRadius: 15,
    boxShadow: '2px 2px 50px lightgray',
  },
  header:{
    fontFamily: Styles.font,
    fontWeight: '400',
    margin: 0, 
    paddingTop: 5,
    paddingBottom: 5,
    opacity: 0.8

  },
  texts:{
    fontFamily: Styles.font,
    fontWeight: '100',
    margin: 0, 
    paddingTop: 5,
    paddingBottom: 5,
    opacity: 0.6,
  }
};

  
export default Radium(Card);