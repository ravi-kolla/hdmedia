import React, {useState} from 'react'
import { Route, Switch } from "react-router-dom"
import Header from './Header'
import Home from './Home'
import News from './News'
import Entertainment from './Entertainment'
import Footer from './Footer'
import NewsDetail from './NewsDetail'
import FestivalWish from './FestivalWish'
import MovieReview from './Reviews'

import {NewsData} from '../content/news'
import {ETNews} from '../content/etnews'
import {SportsNews} from '../content/sportnews'
import {BannerAd1} from '../content/imageAd1'
import {FestivalMessage} from '../content/festival'
import {HomeFeaturedPosts} from '../content/homeFeaturedPosts'
import {ReviewsData} from '../content/reviews'

const Main = () => {

  const [news, setNews] = useState(NewsData);
  const [ETnews, setETnews] = useState(ETNews);
  const [SPnews, setSPnews] = useState(SportsNews);
  const [ImgAd, setImgAd] = useState(BannerAd1);
  const [FestivalMsg, setFestivalMsg] = useState(FestivalMessage);
  const [HFP, setHFP] = useState(HomeFeaturedPosts);
  const [Reviews, setReviews] = useState(ReviewsData);

  const Homepage = () => {
    return(
      <Home count='5' news={news} etnews={ETnews} spnews={SPnews} imgad={ImgAd} featured={HFP} reviews={Reviews} />
    );
  }
  const Newspage = () => {
    return(
      <News pathValue='news' breadCrumbName='News' news={news}/>
    );
  }
  const Entertainmentpage = () => {
    return(
      <News pathValue='entertainment' breadCrumbName='Entertainment' news={ETnews}/>
    );
  }
  const Sportspage = () => {
    return(
      <News pathValue='sports' breadCrumbName='Sports' news={SPnews}/>
    );
  }

  const NewsItem = ({match}) => {
    return(
      <NewsDetail pathValue='news' breadCrumbName='News' featured={news.filter((news) => news.urlname !== match.params.newsLink)} newsItem={news.filter((news) => news.urlname === match.params.newsLink)[0]} />
    )
  }

  const EntertainmentItem = ({match}) => {
    return(
      <NewsDetail pathValue='entertainment' breadCrumbName='Entertainment' featured={ETnews.filter((ETnews) => ETnews.urlname !== match.params.entertainmentId)} newsItem={ETnews.filter((ETnews) => ETnews.urlname === match.params.entertainmentId)[0]} />
    )
  }

  const SportsItem = ({match}) => {
    return(
      <NewsDetail pathValue='sports' breadCrumbName='Sports'  featured={SPnews.filter((SPnews) => SPnews.urlname !== match.params.sportsId)} newsItem={SPnews.filter((SPnews) => SPnews.urlname === match.params.sportsId)[0]} />
    )
  }

  const Festivalpage = ({match}) => {
    return(
      <FestivalWish festival={FestivalMsg.filter((FestivalMsg) => FestivalMsg.urlname === match.params.celebrateLink)[0]} />
    )
  }

  const Reviewspage = ({match}) => {
    console.log(match.params.reviewLink);
    return(
      <MovieReview pathValue='entertainment' breadCrumbName='Entertainment' newsItem={Reviews.filter((Reviews) => Reviews.urlname === match.params.reviewLink)[0]} featured={ETnews.filter((ETnews) => ETnews.urlname !== match.params.entertainmentId)} />
    )
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/news" component={Newspage} />
        <Route path="/news/:newsLink" component={NewsItem} />
        <Route exact path="/sports" component={Sportspage} />
        <Route path="/sports/:sportsId" component={SportsItem} />
        <Route exact path="/entertainment" component={Entertainmentpage} />
        <Route path="/celebrate/:celebrateLink" component={Festivalpage} />
        <Route exact path="/entertainment/reviews/:reviewLink" component={Reviewspage} />
        <Route path="/entertainment/:entertainmentId" component={EntertainmentItem} />
        <Route path="/entertainment/reviews/:reviewLink" component={Reviewspage} />
      </Switch>
      <Footer />
    </>
  )
}

export default Main
