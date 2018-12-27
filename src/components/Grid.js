import React from 'react';
import Radium from 'radium';
import Card from './Card';
import { 
  Container, 
  Row, 
  Col, 
  ScreenClassRender,
  setConfiguration
} from 'react-grid-system';
import Errors from './designed/Errors';

setConfiguration({ defaultScreenClass: 'md', gridColumns: 3});

const Grid = (props) => {

  let returnCard = (cardObject) => {
    return (
      <Card
        card={cardObject}
      />
    )
  }

  const { galleryContent, height } = props;
  // let rowStyle = [localStyles.row];
  let content
  if (galleryContent) content = galleryContent;
  else content = <Errors />
  // if ( height ) rowStyle.push(height);



   
  return(
    <div style={localStyles.container}>
      <Container fluid>
        <Row debug>
          <Col debug>{returnCard(content[0])}</Col>
          <Col debug>{returnCard(content[1])}</Col>
        </Row>
        <br />
        <Row debug>
          <Col debug>{returnCard(content[2])}</Col>
          <Col debug>{returnCard(content[3])}</Col>
          <Col debug>{returnCard(content[4])}</Col>
          <Col debug>{returnCard(content[5])}</Col>
        </Row>
        <br />
        <Row debug>
          <Col debug>{returnCard(content[6])}</Col>
          <Col debug>{returnCard(content[7])}</Col>
          <Col debug>{returnCard(content[8])}</Col>
          <Col debug>{returnCard(content[9])}</Col>
        </Row>
      </Container>
    </div>
  )
  
}

const localStyles = {
  container: { 
    display: 'flex',
    margin:20
  }
};

  
export default Radium(Grid);