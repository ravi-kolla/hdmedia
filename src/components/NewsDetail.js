import React from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet"
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import FeaturedItems from './FeaturedPosts'

const NewsDetail = (props) => {

  return(
    <div className="container all-news">
      <Helmet>
        <title>{props.newsItem.title}</title>
        <meta name="description" content={props.newsItem.title} />
      </Helmet>
      <Container>
        <Container>
          <Row>
            <Breadcrumb>
                <BreadcrumbItem><Link to={`/${props.pathValue}`}>{props.breadCrumbName}</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.newsItem.urlname}</BreadcrumbItem>
            </Breadcrumb>
          </Row>
        </Container>
        <Row>
          <Col md="8">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title">{props.newsItem.title}</h1>
                <p class="card-text"><small class="text-muted">By {props.newsItem.author} - {props.newsItem.date}</small></p>
              </div>
              <img class="card-img-bottom" src={props.newsItem.image} alt="{props.newsItem.title}" />
              <div class="card-body">
                <p class="card-text">{props.newsItem.description}</p>
                <p class="card-text">{props.newsItem.details ? props.newsItem.details : null }</p>
              </div>
            </div>
          </Col>
          <Col md="4">
          </Col>
        </Row>
      </Container>
      <Container className="featured-items-container">
        <FeaturedItems items={props.featured} />
      </Container>
    </div>
  )
}

export default NewsDetail
