import React from 'react';
import {Link} from 'react-router-dom';

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
const TopNews = (props) => {
  const count = parseInt(props.count);
  const News = props.news.slice(0,count).map((newsitem)=>{
    return(
      <div key={newsitem.id}>
        <RenderTopNewsItem pathname={props.pathValue} news={newsitem} />
      </div>
    )
  })
  return (
    <div className="mt-4 top-news-container bg-white">
      <h3 className="top-news-heading">{props.title}</h3>
      {News}
    </div>
  );
};

export default TopNews;
