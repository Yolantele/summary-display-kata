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

const GRID_PADDING = 30;
const RATIO = 8;
const MAX_CARD_IN_GRID_WIDTH = 250;
const MAX_CARD_IN_GRID_HEIGHT = 180;

setConfiguration({ defaultScreenClass: 'md', gridColumns: 6});

const Grid = (props) => {

  const { galleryContent, height, screenWidth } = props;

  const returnCard = (cardObject) => {
    let maxWidth = MAX_CARD_IN_GRID_WIDTH;
    let maxHeight = MAX_CARD_IN_GRID_HEIGHT;
    let cardWidth = screenWidth / RATIO;
    let cardHeight = screenWidth / RATIO - 150;
    return (
      <Card
        card={cardObject}
        width={cardWidth > maxWidth ?  maxWidth : cardWidth}
        height={cardHeight < maxHeight ? maxHeight : cardHeight}
        screenWidth={screenWidth}
      />
    )
  }

  let containerStyle = [localStyles.container]
  let rowStyle = [localStyles.row];
  let content

  if (galleryContent) content = galleryContent;
  else content = <Errors />

  if ( height ) rowStyle.push(height);

  
   
  return(
    <div style={containerStyle}>
      <Container fluid style={localStyles.row}>
        <Row style={localStyles.row}>
          <Col>{returnCard(content[0])}</Col>
          <Col>{returnCard(content[1])}</Col>
          <Col>{returnCard(content[2])}</Col>
          <Col>{returnCard(content[3])}</Col>
          <Col>{returnCard(content[4])}</Col>
        </Row>
        <Row style={localStyles.row}>
          <Col>{returnCard(content[5])}</Col>
          <Col>{returnCard(content[6])}</Col>
          <Col>{returnCard(content[7])}</Col>
          <Col>{returnCard(content[8])}</Col>
          <Col>{returnCard(content[9])}</Col>
        </Row>
      </Container>
    </div>
  )
  
}

const localStyles = {
  container: { 
    display: 'flex',
    // justifyContent: 'flex-start',
    margin: 20
  },
  row: {
    paddingBottom: 20
  }
};

  
export default withWidth(Radium(Grid));