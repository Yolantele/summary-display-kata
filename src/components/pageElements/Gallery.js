import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';
import Card from '../Card';
import Grid from '../Grid';


const DUMMY_OBJ = {
	"id": "edd15587-633a-4bd1-b588-e72254a4f020",
	"name": "Ballsbridge Hotel",
	"address1": "Pembroke Rd",
	"postcode": "D4",
	"city": "Dublin",
	"listing_text": "As Dublin City's Largest Conference Hotel, Clayton Hotel Burlington Road comprising of a conference centre catering for up to 1400 delegates with 20 supporting meeting rooms and 502 bedrooms."
}

class Gallery extends React.Component {

  render () {

    const { height } = this.props;
    console.log('---->', height)
    let object1 = (
      <Card
      card={DUMMY_OBJ}
      height={300}
      width={400}
      />
    )
    return(
      <div style={localStyles.container}>
        <Grid
          obj1={object1}
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