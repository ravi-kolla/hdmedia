import React from 'react';
import {Link} from 'react-router-dom';

function RenderTopNewsItem({ pathname, news, onClick }){
  return(
    <div className="">
      <div className="media">
          <div className="media-left">
            <Link to={`/${pathname}/${news.id}`}>
              <img className="headlineImg" title={news.title} alt={news.title} src={news.thumbnail} />
            </Link>
          </div>
          <div className="media-body">
            <Link to={`/${pathname}/${news.id}}`} className="headLineTextLink">
              <p className="headLineText">{news.title}</p>
            </Link>
          </div>
        </div>
    </div>
  )
}
const TopNews = (props) => {

  const News = props.news.map((newsitem)=>{
    return(
      <div key={newsitem.id}>
        <RenderTopNewsItem pathname={props.pathValue} news={newsitem} />
      </div>
    )
  })
  return (
    <div className="mt-4 bg-white">
      <h3>{props.title}</h3>
      {News}
    </div>
  );
};

export default TopNews;
