import React from 'react';
import Radium from 'radium';


const Loader = (props) => {
  
return(
  <div style={localStyles.container}>
    <div style={localStyles.loader}>
      Loading data...
    </div>
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
  },
  loader: {
    display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 500, 
    width:500
  }
};

export default Radium(Loader)