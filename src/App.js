import React from 'react'
import Main from './components/Layout'
import {Helmet} from "react-helmet"

function App() {

  return (
    <>
      <Helmet titleTemplate="Hindustan Daily - %s" defaultTitle="Hindustan Daily">
        <meta charSet="utf-8" />
        <meta name="description" content="Hindustan Daily Media" />
      </Helmet>
      <Main />
    </>
  );

}

export default App;
