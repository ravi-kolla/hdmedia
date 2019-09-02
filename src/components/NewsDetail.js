import React from 'react';
import {Link} from 'react-router-dom';
import AdSense from 'react-adsense';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const NewsDetail = (props) => {

  return(
    <div className="container all-news">
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
              <div class="card-body">
                <p class="card-text">{props.newsItem.details}</p>
              </div>
            </div>
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

export default NewsDetail
