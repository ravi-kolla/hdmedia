import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import News from './News';
import Entertainment from './Entertainment';
import Footer from './Footer';
import NewsDetail from './NewsDetail';
import FestivalWish from './FestivalWish';

import {NewsData} from '../content/news'
import {ETNews} from '../content/etnews'
import {SportsNews} from '../content/sportnews'
import {BannerAd1} from '../content/imageAd1'
import {FestivalMessage} from '../content/festival'
import {HomeFeaturedPosts} from '../content/homeFeaturedPosts'

const Main = () => {

  const [news, setNews] = useState(NewsData);
  const [ETnews, setETnews] = useState(ETNews);
  const [SPnews, setSPnews] = useState(SportsNews);
  const [ImgAd, setImgAd] = useState(BannerAd1);
  const [FestivalMsg, setFestivalMsg] = useState(FestivalMessage);
  const [HFP, setHFP] = useState(HomeFeaturedPosts);

  const Homepage = () => {
    return(
      <Home count='5' news={news} etnews={ETnews} spnews={SPnews} imgad={ImgAd} featured={HFP} />
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
      <NewsDetail pathValue='news' breadCrumbName='News' featured={news} newsItem={news.filter((news) => news.urlname === match.params.newsLink)[0]} />
    )
  }

  const EntertainmentItem = ({match}) => {
    return(
      <NewsDetail pathValue='entertainment' breadCrumbName='Entertainment' featured={ETnews} newsItem={ETnews.filter((ETnews) => ETnews.urlname === match.params.entertainmentId)[0]} />
    )
  }

  const SportsItem = ({match}) => {
    return(
      <NewsDetail pathValue='sports' breadCrumbName='Sports'  featured={SPnews} newsItem={SPnews.filter((SPnews) => SPnews.urlname === match.params.sportsId)[0]} />
    )
  }

  const Festivalpage = ({match}) => {
    return(
      <FestivalWish festival={FestivalMsg.filter((FestivalMsg) => FestivalMsg.urlname === match.params.celebrateLink)[0]} />
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
        <Route exact path="/happyvinayakachaturthi" component={Festivalpage} />
        <Route path="/celebrate/:celebrateLink" component={Festivalpage} />
        <Route path="/entertainment/:entertainmentId" component={EntertainmentItem} />
      </Switch>
      <Footer />
    </>
  )
}

export default Main
