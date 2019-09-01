import React from 'react';

const ImageAd = (props) => {
  return(
    <div className="card banner-ad bg-dark text-white">
      <img className="card-img image-ad" src={props.imageAd.image} alt={props.imageAd.alt} />
      <div className="card-img-overlay">
        <h5 className="card-title">{props.imageAd.title ? props.imageAd.title : null}</h5>
        <p className="card-text col-md-6 image-ad-desc">{props.imageAd.description ? props.imageAd.description : null}</p>
      </div>
    </div>
  )
}

export default ImageAd;
