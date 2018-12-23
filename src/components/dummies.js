import React from 'react';
import Styles from '../../assets/styles';
import Radium from 'radium';


class dummy extends React.Component {
  constructor() {
    super()
    this.state = {
      
    };
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

export default Radium(dummy);

//------

import React from 'react';
import Styles from '../../assets/styles';
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