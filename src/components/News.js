import React from 'react';
import NewsList from './NewsList';
import GoogleAdComponent from './GoogleAdsense'
import { Container, Row, Col } from 'reactstrap';

const News = (props) => {

  return(
    <div className="container all-news">
      <Container>
        <Row>
          <Col md="8">
            <NewsList pathvar={props.pathValue} pathname={props.breadCrumbName} newslist={props.news} />
          </Col>
          <Col md="4">
            <GoogleAdComponent />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default News
