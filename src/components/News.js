import React from 'react';
import NewsList from './NewsList';
import AdSense from 'react-adsense';
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
          <AdSense.Google
            client='ca-pub-8915459609879797'
            slot='7806394673'
            style={{ display: 'block', height: 300 }}
            layout='in-article'
            format='fluid'
          />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default News
