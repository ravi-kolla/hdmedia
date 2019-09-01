import React, { useState } from 'react';
import CarouselComponent from './Carousel';
import FeaturedItems from './FeaturedPosts'
import { Container, Row, Col } from 'reactstrap';
import TopNews from './TopNews';
import ImageAd from './ImageAd';


const Home = (props) => {
  return (
    <div>
      <CarouselComponent />
      <FeaturedItems items={props.featured} />
      <Container>
        <Row>
          <Col md="6" lg="4">
            <TopNews title='Headlines' pathValue='news' breadCrumbName='News' news={props.news} />
          </Col>
          <Col md="6" lg="4">
            <TopNews title='Entertainment' pathValue='entertainment' breadCrumbName='Entertainment' news={props.etnews} />
          </Col>
          <Col md="6" lg="4">
            <TopNews title='Sports' pathValue='sports' breadCrumbName='Sports'  news={props.spnews} />
          </Col>
        </Row>
      </Container>
      <div className="container">
        <ImageAd imageAd={props.imgad}/>
      </div>
    </div>
  )
}

export default Home
