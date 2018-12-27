import React from 'react';
import Radium from 'radium';
import axios from 'axios';
import Gallery from '../pageElements/Gallery';
import Loader from '../designed/Loader';


const VENUES_URL = 'https://venue-lister.herokuapp.com/venues';


class GalleryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      venueData: [], 
      error: null
    };
  }

  componentWillMount() {
    this.setVenueData();
  }
  
  setVenueData = async () => {
    let data = await this.getVenueData();
    this.setState({
      venueData: data,
      isLoaded: true
    })
  }

  getVenueData () {
    try {
      const params = {
        url: VENUES_URL,
        method: 'get',
      }
      return axios(params)
        .then(res => res.data)
        .catch (err => console.log('error is -------> ', err));
    }
    catch (err) {
      console.log('error is ----->', err);
    }
  }


  render() {
    const { isLoaded, venueData } = this.state;

    let galleryContent;

    if (isLoaded) galleryContent = (<Gallery galleryContent={venueData}/>)
    else galleryContent = <Loader/>

    return(
      <div style={localStyles.container}>
        {galleryContent}
      </div>
    );
  }

}

const localStyles = {
  container: { 
    display: 'flex',
  },
};

export default Radium(GalleryContainer);