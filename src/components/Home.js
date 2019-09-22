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
          {props.headlines ?
          <Col md="6" lg="4">
            <TopNews title='Headlines' pathValue='news' breadCrumbName='News' news={props.headlines} count={props.count} />
          </Col> : null }
          {props.spnews ?
          <Col md="6" lg="4">
            <TopNews title='Sports' pathValue='sports' breadCrumbName='Sports'  news={props.spnews} count={props.count}/>
          </Col> : null }
          {props.etnews ?
          <Col md="6" lg="4">
            <TopNews title='Entertainment' pathValue='entertainment' breadCrumbName='Entertainment' news={props.etnews} count={props.count} />
          </Col> : null }
          <Col md="6" lg="4">
            <TopNews title='News' pathValue='news' breadCrumbName='News' news={props.news} count={props.count} />
          </Col>
          <Col md="6" lg="4">
            <div className="widget_wrap">
              <iframe className="widget_frame" src="https://www.zomato.com/widgets/res_search_widget.php?entity_id=6&entity_type=city&city_id=6&theme=red&sort=popularity" border="0" frameborder="0"></iframe>
            </div>
          </Col>
          <Col md="6" lg="4">
            <TopNews title='Reviews' pathValue='entertainment/reviews' breadCrumbName='Reviews'  news={props.reviews} count={props.count}/>
          </Col>
          <Col md="6" lg="4">
            <TopNews title='Technology' pathValue='technology' breadCrumbName='Technology'  news={props.tech} count={props.count}/>
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
