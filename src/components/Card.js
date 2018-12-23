import React from 'react';
import Styles from '../assets/styles';
import Radium from 'radium';

const CHAR_LENGTH = 100;
const CARD_SIZE_TO_TEXT_PROPORTION = 2.3;
const CARD_SIZE_TO_TITLE_PROPORTION = 10;


class Card extends React.Component {

  render () {
    const { card, height, width } = this.props;

    const cardStyle = [localStyles.container];

    let lengthOfDescription = CHAR_LENGTH;
    let lengthOfTitle = CHAR_LENGTH;

    if (height) cardStyle.push({height: height});
    if (width) {
      cardStyle.push({width: width}) 
      lengthOfDescription = width /CARD_SIZE_TO_TEXT_PROPORTION;
      lengthOfTitle = width /CARD_SIZE_TO_TITLE_PROPORTION;
    }

    
    let title = `${card.name} - ${card.address1}`;
    let description = `${card.listing_text.substring(0, lengthOfDescription)}...`;
    let details = `${card.city}, ${card.postcode}`;

    if (title.length > lengthOfTitle) {
      title = title.substring(0, lengthOfTitle) + '...';
    }
  
    return(
      <div 
        style={cardStyle} 
        alt={card.id} 
        key={card.id}
        onClick={() => {alert('mouse is left')}} 
        onMouseOver={() => {alert('mouse is left')}}
      >
        <h2 style={localStyles.header}>{title}</h2>
        <h4 style={localStyles.texts}>{description}</h4>
        <h4 style={localStyles.texts}>{details}</h4>
      </div>
    )
    
  }
}

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    cursor: 'pointer',
    backgroundColor: Styles.colours.white,
    padding: 40,
    margin: 40, 
    borderRadius: 15,
    boxShadow: '2px 2px 50px lightgray',
    width: 300
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
    opacity: 0.6
  }, 
  texts:{
    fontFamily: Styles.font,
    fontWeight: '100',
    margin: 0, 
    paddingTop: 5,
    paddingBottom: 5,
    opacity: 0.8
  }
};

  
export default Radium(Card);