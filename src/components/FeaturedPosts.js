import React from 'react';

const RenderFeaturedItem = ({feature}) => {
  return(
    <div className="card mt-4">
      <img className="card-img-top featured-img" src={feature.image} alt={feature.title} />
      <div className="card-body">
        <h5 className="card-title">{feature.title}</h5>
        <p className="card-text">{feature.description}</p>
          <a href={feature.url} className="btn btn-primary">{feature.button}</a>
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
