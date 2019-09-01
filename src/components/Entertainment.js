import React from 'react';
import NewsList from './NewsList';
import { Container, Row, Col } from 'reactstrap';

const Entertainment = (props) => {

  return(
    <Container>
      <Row>
        <Col md="8">
          <NewsList newslist={props.news} />
        </Col>
        <Col md="4">
          <p>Hello</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Entertainment
