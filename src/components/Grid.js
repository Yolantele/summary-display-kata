import React from 'react';
import Styles from '../assets/styles';
import Radium from 'radium';
import { 
  Container, 
  Row, 
  Col, 
  Visible, 
  Hidden,
  ScreenClassRender,
  setConfiguration
} from 'react-grid-system';

setConfiguration({ defaultScreenClass: 'md', gridColumns: 10});

const Grid = (props) => {

  const { obj1, height } = props;
  let rowStyle = [localStyles.row];

  if ( height ) rowStyle.push(height);
   
  return(
    // <div style={localStyles.container}>
    <ScreenClassRender style={localStyles.container} render={screenClass => (
    <div style={{ width: 1500, padding: 50}}>
      <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '8rem' : '4rem' }} >
        {/* Screen class: {screenClass} */}
      </p>
      <Container fluid>
        <Row debug style={rowStyle}>
          <Col debug>{obj1}</Col>
          <Col debug>2 Pic</Col>
          <Col debug>3 Pic</Col>
        </Row>
        <br />
        <Row debug>
          <Col debug>1 Pic</Col>
          <Col debug>2 Pic</Col>
          <Col debug>3 Pic</Col>
          <Col debug>4 Pic</Col>
        </Row>
        <br />
        <Row debug>
          <Col debug>1 of 4</Col>
          <Col debug>2 of 4</Col>
          <Col debug>3 of 4</Col>
          <Col debug>4 of 4</Col>
        </Row>
      </Container>
    </div>
    )} />
  )
  
}

const localStyles = {
  container: { 
    display: 'flex',
  },
  row: {
    height: 300
  },
  column:{
    width: 300,
  }
};

  
export default Radium(Grid);