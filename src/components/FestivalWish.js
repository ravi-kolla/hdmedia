import React from 'react'
import {Helmet} from 'react-helmet'

const FestivalWish = (props) => {
  return(
    <div className="container bg-white festival-container mb-4">
      <Helmet>
        <title>{props.festival.title}</title>
        <meta name="description" content={props.festival.title} />
      </Helmet>
      <div>
        <img className="card-img-top festival-banner" src={props.festival.banner} alt={props.festival.title} />
        <div className="card-body">
          <h5 className="card-title">{props.festival.title}</h5>
          <p className="card-text"><small class="text-muted">From {props.festival.author} - {props.festival.date}</small></p>
          <p className="card-text">{props.festival.description}</p>
          {props.festival.details ? <p className="card-text">{props.festival.details}</p> : null}
          {props.festival.moredetails ? <p className="card-text">{props.festival.moredetails}</p> : null}
        </div>
      </div>
    </div>
  )
}

export default FestivalWish
