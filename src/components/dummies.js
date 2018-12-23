import React from 'react';
import Styles from '../constants/localStyles';
import Radium from 'radium';


class Dummy extends React.Component {
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

export default Radium(Dummy);

//------

import React from 'react';
import Styles from '../../assets/localStyles';
import Radium from 'radium';


const Dfunc = (props) => {
   
  return(
    <div style={localStyles.container}>
    </div>
  )
  
}

const localStyles = {
  container: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
    cursor: 'pointer'
  }
};

  
export default Radium(Dfunc);