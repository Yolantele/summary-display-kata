import React from 'react';
import Radium from 'radium';


const Errors = (props) => {
  
return(
  <div style={localStyles.container}>
    <div style={localStyles.error}>
      Error Obtaining Data...
    </div>
  </div>
)

}

const localStyles = {
  container: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  error: {
    display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
};

export default Radium(Errors)