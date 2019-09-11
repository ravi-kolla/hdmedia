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
import {BannerAd1} from '../content/imageAd1'
import {FestivalMessage} from '../content/festival'
import {HomeFeaturedPosts} from '../content/homeFeaturedPosts'
import {ReviewsData} from '../content/reviews'

const Main = () => {

  const [news, setNews] = useState(NewsData);
  const [ImgAd, setImgAd] = useState(BannerAd1);
  const [FestivalMsg, setFestivalMsg] = useState(FestivalMessage);
  const [HFP, setHFP] = useState(HomeFeaturedPosts);
  const [Reviews, setReviews] = useState(ReviewsData);

  const Homepage = () => {
    return(
      <Home count='5' news={news.filter((news) => news.category === 'news')} tech={news.filter((news) => news.category === 'technology')}  etnews={news.filter((news) => news.category === 'entertainment')} spnews={news.filter((news) => news.category === 'sports')} imgad={ImgAd} featured={HFP} reviews={Reviews} />
    );
  }
  const Newspage = () => {
    return(
      <News pathValue='news' breadCrumbName='News' news={news.filter((news) => news.category === 'news')}/>
    );
  }
  const Techpage = () => {
    return(
      <News pathValue='technology' breadCrumbName='Technology' news={news.filter((news) => news.category === 'technology')}/>
    );
  }
  const Entertainmentpage = () => {
    return(
      <News pathValue='entertainment' breadCrumbName='Entertainment' news={news.filter((news) => news.category === 'entertainment')}/>
    );
  }
  const Sportspage = () => {
    return(
      <News pathValue='sports' breadCrumbName='Sports' news={news.filter((news) => news.category === 'sports')}/>
    );
  }

  const NewsItem = ({match}) => {
    return(
      <NewsDetail pathValue='news' breadCrumbName='News' featured={news.filter((news) => news.category === 'news' && news.urlname !== match.params.newsLink)} newsItem={news.filter((news) => news.urlname === match.params.newsLink)[0]} />
    )
  }

  const EntertainmentItem = ({match}) => {
    return(
      <NewsDetail pathValue='entertainment' breadCrumbName='Entertainment' featured={news.filter((news) => news.category === 'entertainment' && news.urlname !== match.params.entertainmentId)} newsItem={news.filter((news) => news.urlname === match.params.entertainmentId)[0]} />
    )
  }

  const SportsItem = ({match}) => {
    return(
      <NewsDetail pathValue='sports' breadCrumbName='Sports'  featured={news.filter((news) => news.category === 'sports' && news.urlname !== match.params.sportsId)} newsItem={news.filter((news) => news.urlname === match.params.sportsId)[0]} />
    )
  }

  const Festivalpage = ({match}) => {
    return(
      <FestivalWish festival={FestivalMsg.filter((FestivalMsg) => FestivalMsg.urlname === match.params.celebrateLink)[0]} />
    )
  }

  const Reviewspage = ({match}) => {
    return(
      <MovieReview pathValue='entertainment' breadCrumbName='Entertainment' newsItem={Reviews.filter((Reviews) => Reviews.urlname === match.params.reviewLink)[0]} featured={Reviews.filter((Reviews) => Reviews.urlname !== match.params.reviewLink)} />
    )
  }
  const TechDetailpage = ({match}) => {
    return(
      <NewsDetail pathValue='technology' breadCrumbName='Technology'  featured={news.filter((news) => news.category === 'technology' && news.urlname !== match.params.techLink)} newsItem={news.filter((news) => news.urlname === match.params.techLink)[0]} />
    )
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/news" component={Newspage} />
        <Route exact path="/technology" component={Techpage} />
        <Route path="/news/:newsLink" component={NewsItem} />
        <Route exact path="/sports" component={Sportspage} />
        <Route path="/sports/:sportsId" component={SportsItem} />
        <Route exact path="/entertainment" component={Entertainmentpage} />
        <Route path="/celebrate/:celebrateLink" component={Festivalpage} />
        <Route exact path="/entertainment/reviews/:reviewLink" component={Reviewspage} />
        <Route path="/entertainment/:entertainmentId" component={EntertainmentItem} />
        <Route path="/entertainment/reviews/:reviewLink" component={Reviewspage} />
        <Route path="/technology/:techLink" component={TechDetailpage} />
      </Switch>
      <Footer />
    </>
  )
}

export default Main
