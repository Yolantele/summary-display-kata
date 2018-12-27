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
import withWidth from './higher-order-comp/withWidth';

const GRID_PADDING = 50;
const CARD_TO_SCREEN_RATIO = 4
const MAX_CARD_IN_GRID_WIDTH = 250;
// setConfiguration({ defaultScreenClass: 'md', gridColumns: 3});

const Grid = (props) => {

  const { galleryContent, height, screenWidth } = props;

  const returnCard = (cardObject) => {
    let maxWidth = MAX_CARD_IN_GRID_WIDTH;
    let cardWidth = screenWidth / CARD_TO_SCREEN_RATIO;
    return (
      <Card
        card={cardObject}
        width={cardWidth > maxWidth ?  maxWidth : cardWidth}
      />
    )
  }

  let containerStyle = [localStyles.container]
  let rowStyle = [localStyles.row];
  let content

  if (screenWidth) {
    containerStyle.push({width: screenWidth - GRID_PADDING})
  }

  if (galleryContent) content = galleryContent;
  else content = <Errors />

  if ( height ) rowStyle.push(height);



   
  return(
    <div style={containerStyle}>
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
    justifyContent: 'center',
    margin: 20
  },
  row: {

  }
};

  
export default withWidth( Radium(Grid) );