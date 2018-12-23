import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';
import axios from 'axios';

const VENUES_URL = 'https://venue-lister.herokuapp.com/venues';

class GalleryContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      venueData: null
    };
  }

  componentWillMount() {
    this.getVenueData();
  }

  getVenueData = () => {
    const params = {
      url: VENUES_URL,
      method: 'get',
    }

    axios(params)
      .then(res => {
        console.log('---->venues data', res.data)
        this.setState({
          venueData: res.data,
        })
      })
      .catch(err => {
        console.log("err ------->", err);
      })
  }


  render() {
    return(
      <div style={localStyles.container}>
      </div>
    );
  }

}

const localStyles = {
  container: { 
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
  }
};

export default Radium(GalleryContainer);