import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap';
function RenderTopNewsItem({ pathname, news, onClick }){
  return(
    <div className="">
      <div className="media">
          <div className="media-left">
            <Link to={`/${pathname}/${news.urlname}`}>
              <img className="headlineImg" title={news.title} alt={news.title} src={news.thumbnail} />
            </Link>
          </div>
          <div className="media-body">
            <Link to={`/${pathname}/${news.urlname}`} className="headLineTextLink">
              <p className="headLineText">{news.title}</p>
            </Link>
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
      <Container>
        <Row>
          <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.pathname}</BreadcrumbItem>
          </Breadcrumb>
        </Row>
      </Container>
      <div>
        {News}
      </div>
    </>
  );
};

export default NewsList;
