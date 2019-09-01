import React from 'react';
import NewsList from './NewsList';
import { Container, Row, Col } from 'reactstrap';

const News = (props) => {

  return(
    <Container>
      <Row>
        <Col md="8">
          <NewsList pathvar={props.pathValue} pathname={props.breadCrumbName} newslist={props.news} />
        </Col>
        <Col md="4">
          
        </Col>
      </Row>
    </Container>
  )
}

export default News
