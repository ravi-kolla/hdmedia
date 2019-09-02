import React from 'react';

const FestivalWish = (props) => {
  return(
    <div class="card all-news">
      <img class="card-img-top" src={props.festival.image} alt={props.festival.title} />
      <div class="card-body">
        <h5 class="card-title">{props.festival.title}</h5>
        <p class="card-text">{props.festival.description}</p>
        <p class="card-text"><small class="text-muted">From {props.festival.author} - {props.festival.date}</small></p>
      </div>
    </div>
  )
}

export default FestivalWish
