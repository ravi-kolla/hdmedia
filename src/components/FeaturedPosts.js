import React from 'react';
import {Link} from 'react-router-dom';

const RenderFeaturedItem = ({feature}) => {
  return(
    <div className="card mt-4">
      <Link to={`/${feature.category}/${feature.urlname}`}>
        <img className="card-img-top featured-img" src={feature.image} alt={feature.title} />
      </Link>
      <div className="card-body">
        <Link to={`/${feature.category}/${feature.urlname}`}>
          <h5 className="card-title">{feature.title}</h5>
        </Link>
      </div>
    </div>
  )
}
const FeaturedItems = (props) => {
  const FeaturedPosts = props.items.map((item)=>{
    return(
      <div className="col-md-4" key={item.id}>
        <RenderFeaturedItem feature={item} />
      </div>
    )
  })
  return (
    <div className="container featured-items-container">
      <div className="card-group">
        {FeaturedPosts}
      </div>
    </div>
  );
};

export default FeaturedItems;
