import React from 'react';
import Radium from 'radium';


const Controlls = (props) => {

  let { rightClick, leftClick } = props;
   
  return(
    <div style={localStyles.container}>
      <div 
        style={localStyles.button}
        onClick={() => {leftClick()}}
      >
        <img src={require('../assets/images/left.png')} alt='left'/>
      </div>
      <div 
        style={localStyles.button}
        onClick={() => {rightClick()}}
      >
        <img src={require('../assets/images/right.png')} alt='right'/>
      </div>
    </div>
  )
  
}

const localStyles = {
  container: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    height: 50,
  },
  button:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:10,
    height: 20, 
    width: 20, 
    borderRadius: 20,
    color: 'black',
    backgroundColor: 'white',
    boxShadow: '2px 2px 10px lightgray',
    resizeMode: 'contain'
  }
};

  
export default Radium(Controlls);