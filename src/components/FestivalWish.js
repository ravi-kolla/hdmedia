import React from 'react'
import {Helmet} from 'react-helmet'

const FestivalWish = (props) => {
  return(
    <div className="container bg-white mt-4 mb-4">
      <Helmet>
        <title>{props.festival.title}</title>
        <meta name="description" content={props.festival.title} />
      </Helmet>
      <div class="mt-2">
        <img class="card-img-top mt-2" src={props.festival.banner} alt={props.festival.title} />
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
