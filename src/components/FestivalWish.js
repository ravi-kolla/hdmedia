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
        <img class="card-img-top festival-banner" src={props.festival.banner} alt={props.festival.title} />
        <div class="card-body">
          <h5 class="card-title">{props.festival.title}</h5>
          <p class="card-text"><small class="text-muted">From {props.festival.author} - {props.festival.date}</small></p>
          <p class="card-text">{props.festival.description}</p>
          {props.festival.details ? <p class="card-text">{props.festival.details}</p> : null}
        </div>
      </div>
    </div>
  )
}

export default FestivalWish
