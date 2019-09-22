import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Helmet} from 'react-helmet'

function RenderTopNewsItem({ pathname, news, onClick }){
  return(
    <div className="bg-white">
      <div className="media">
          <div className="media-left">
            {news.urlname ?
            <Link to={`/${pathname}/${news.urlname}`}>
              <img className="headlineImg" title={news.title} alt={news.title} src={news.urlToImage} />
            </Link> : <img className="headlineImg" title={news.title} alt={news.title} src={news.urlToImage} /> }
          </div>
          <div className="media-body">
            {news.urlname ?
            <Link to={`/${pathname}/${news.urlname}`} className="headLineTextLink">
              <p className="headLineText">{news.title}</p>
            </Link> : <p className="headLineText">{news.title}</p> }
          </div>
        </div>
    </div>
  )
}

const NewsList = (props) => {

  const News = props.newslist.map((newsitem)=>{
    return(
      <div key={newsitem.id}>
        <RenderTopNewsItem pathname={props.pathvar} news={newsitem} />
      </div>
    )
  })
  return (
    <>
      <Helmet>
        <title>{props.pathname}</title>
        <meta name="description" content= {`Hindustan Daily - ${props.pathname}`} />
      </Helmet>
      <Container>
        <Row>
          <Breadcrumb className="breadcrumb-container">
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.pathname}</BreadcrumbItem>
          </Breadcrumb>
        </Row>
      </Container>
      <div className="all-news-component">
        {News}
      </div>
    </>
  );
};

export default NewsList;
