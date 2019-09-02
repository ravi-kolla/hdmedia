import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAdComponent from './GoogleAdsense';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const NewsDetail = (props) => {

  return(
    <Container>
      <Container>
        <Row>
          <Breadcrumb>
              <BreadcrumbItem><Link to={`/${props.pathValue}`}>{props.breadCrumbName}</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.newsItem.id}</BreadcrumbItem>
          </Breadcrumb>
        </Row>
      </Container>
      <Row>
        <Col md="8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{props.newsItem.title}</h5>
              <p class="card-text">{props.newsItem.description}</p>
              <p class="card-text"><small class="text-muted">By {props.newsItem.author} - {props.newsItem.date}</small></p>
            </div>
            <img class="card-img-bottom" src={props.newsItem.image} alt="{props.newsItem.title}" />
            <GoogleAdComponent />
            <div class="card-body">
              <p class="card-text">{props.newsItem.details}</p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <GoogleAdComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default NewsDetail
