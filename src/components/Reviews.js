import React from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet"
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import FeaturedItems from './FeaturedPosts'

const MovieReview = (props) => {

  return(
    <div className="container all-news">
      <Helmet>
        <title>{props.newsItem.title}</title>
        <meta name="description" content={props.newsItem.title} Review />
      </Helmet>
      <Container>
        <Container>
          <Row>
            <Breadcrumb className="breadcrumb-container">
                <BreadcrumbItem><Link to={`/${props.pathValue}`}>{props.breadCrumbName}</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.newsItem.urlname} Review</BreadcrumbItem>
            </Breadcrumb>
          </Row>
        </Container>
        <Row>
          <Col md="8">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">{props.newsItem.title}</h1>
                <p className="card-text"><small className="text-muted">By {props.newsItem.author} - {props.newsItem.date}</small></p>
              </div>
              <img className="card-img-bottom" src={props.newsItem.image} alt="{props.newsItem.title}" />
              <div className="card-body">
                <h2 className="card-title">Movie Info:</h2>
                <p className="card-text"><span className="sub-heading">Movie: </span><span>{props.newsItem.name}</span></p>
                <p className="card-text"><span className="sub-heading">Rating: </span><span>{props.newsItem.rating}</span></p>
                <p className="card-text"><span className="sub-heading">Cast: </span><span>{props.newsItem.cast}</span></p>
                <p className="card-text"><span className="sub-heading">Music: </span><span>{props.newsItem.music}</span></p>
                <p className="card-text"><span className="sub-heading">Producer: </span><span>{props.newsItem.producer}</span></p>
                <p className="card-text"><span className="sub-heading">Banner: </span><span>{props.newsItem.banner}</span></p>
                <p className="card-text">{props.newsItem.writer ? `<span className="sub-heading">Written By: </span><span>{props.newsItem.writer}</span>` : null }</p>
                <p className="card-text"><span className="sub-heading">Director: </span><span>{props.newsItem.director}</span></p>
                <p className="card-text"><span className="sub-heading">In Theaters: </span><span>{props.newsItem.released}</span></p>
              </div>
              <div className="card-body">
                <h2 className="card-title">{props.newsItem.storyintro ? `Story:` : null }</h2>
                <p className="card-text">{props.newsItem.storyintro ? props.newsItem.storyintro : null }</p>
                <p className="card-text">{props.newsItem.storydetails ? props.newsItem.storydetails : null }</p>
                <p className="card-text">{props.newsItem.storyconclusion ? props.newsItem.storyconclusion : null }</p>
              </div>
              <div className="card-body">
                <h2 className="card-title">{props.newsItem.heroperformance ? `Performances:` : null }</h2>
                <p className="card-text">{props.newsItem.heroperformance ? props.newsItem.heroperformance : null }</p>
                <p className="card-text">{props.newsItem.heroineperformance ? props.newsItem.heroineperformance : null }</p>
                <p className="card-text">{props.newsItem.othersperformance ? props.newsItem.othersperformance : null }</p>
              </div>
              <div className="card-body">
                <h2 className="card-title">{props.newsItem.technicaldetail1 ? `Technical Overview:` : null }</h2>
                <p className="card-text">{props.newsItem.technicaldetail1 ? props.newsItem.technicaldetail1 : null }</p>
                <p className="card-text">{props.newsItem.technicaldetail2 ? props.newsItem.technicaldetail2 : null }</p>
              </div>
              <div className="card-body">
                <h2 className="card-title">{props.newsItem.finalnote ? `Final Note:` : null }</h2>
                <p className="card-text">{props.newsItem.finalnote ? props.newsItem.finalnote : null }</p>
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

export default MovieReview
