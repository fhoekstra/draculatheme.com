import React from 'react';
import Head from 'next/head';

import Theme from '../layouts/Theme';
import Topbar from '../components/pro/Topbar';
import Tweet from '../components/journey/Tweet';
import Updates from '../components/Updates';
import Footer from '../components/pro/Footer';
import getWallOfLove from '../lib/wall-of-Love';
import { fetchTweets } from '../lib/tweets';
import styles from '../components/journey/Period.module.css';

const query = { title: 'Wall of Love', color: 'cyan', icon: 'pack-1/045-dracula.svg' };

export async function getStaticProps() {
  try {
    const journeys = await fetchTweets(getWallOfLove);

    return { props: { journeys, query } };
  }
  catch (e) {
    console.error(e);

    return { props: { journeys: [], query } };
  }
}

class WallOfLove extends React.Component {
  render() {
    const title = 'Wall of Love - Dracula';
    const description = '';

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
          {/* <meta content="https://draculatheme.com/pro/journey" property="og:url" />
          <meta content="https://draculatheme.com/static/img/pro/journey/0.png" property="og:image" /> */}
          <meta name="theme-color" content="#50fa7b" />

          <link rel="icon" type="image/x-icon" href="/static/img/pro/favicon.ico" />
        </Head>

        <div className="wrap">
          <div className="theme">
            <h3>Wall of Love</h3>
          </div>
          <div className={styles.tweetList}>
            {this.props.journeys[0].tweets.map((tweet, index) => {
              return <Tweet key={index} data={tweet} />
            })}
          </div>
        </div>
        {/* <div className="journey-updates-container">
          <div className="journey-updates">
            <Updates type="journey" />
          </div>
        </div>
        <Footer /> */}
      </div>
    )
  }
}

WallOfLove.Layout = Theme;

export default WallOfLove;
