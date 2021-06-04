import React from 'react';
import Head from 'next/head';

import Topbar from '../../components/pro/Topbar';
import Header from '../../components/journey/Header';
import About from '../../components/journey/About';
import Period from '../../components/journey/Period';
import Updates from '../../components/Updates';
import Footer from '../../components/pro/Footer';
import getJourneys from '../../lib/journeys';
import { fetchTweets } from '../../lib/tweets';

export async function getStaticProps() {
  try {
    const journeys = await fetchTweets(getJourneys);

    return { props: { journeys } };
  }
  catch (e) {
    console.error(e);

    return { props: { journeys } };
  }
}

class Journey extends React.Component {
  renderJourneys() {
    return this.props.journeys.map((journey, index) => {
      return <Period journey={journey} key={index} />
    });
  }

  render() {
    const title = 'How I made $101,578.04 selling colors online - Dracula';
    const description = 'Dracula PRO has hit 100K in sales — here\'s everything I learned along the way';

    return (
      <div className="green" style={{ backgroundColor: '#2a2c37', fontFamily: 'Fira Code, monospace' }}>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={title} property="twitter:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Zeno Rocha" name="author" />
          <meta content="https://draculatheme.com/pro/journey" property="og:url" />
          <meta content="https://draculatheme.com/static/img/pro/journey/0.png" property="og:image" />
          <meta name="theme-color" content="#50fa7b" />

          <link rel="icon" type="image/x-icon" href="/static/img/pro/favicon.ico" />
        </Head>

        <Topbar />
        <Header />
        <About />
        {this.renderJourneys()}
        <div className="journey-updates-container">
          <div className="journey-updates">
            <Updates type="journey" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Journey;
