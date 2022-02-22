import React from 'react'
import Head from 'next/head'
import { getBasePath } from '../lib/environment'
import Blogpost from '../layouts/Blogpost'
import styles from './dashboard.module.css'

export async function getStaticProps() {
  const mailchimpReq = await fetch(`${getBasePath()}/api/mailchimp`)
  const mailchimpRes = await mailchimpReq.json()
  const mailchimp = mailchimpRes.total

  const twitterReq = await fetch(`${getBasePath()}/api/twitter`)
  const twitterRes = await twitterReq.json()
  const twitter = twitterRes.total

  const githubReq = await fetch(`${getBasePath()}/api/github`)
  const githubRes = await githubReq.json()
  const github = githubRes.total

  const proSalesReq = await fetch(`${getBasePath()}/api/sales/tPfIDt`)
  const proSalesRes = await proSalesReq.json()
  const proSales = proSalesRes.total

  const uiSalesReq = await fetch(`${getBasePath()}/api/sales/MkxCD`)
  const uiSalesRes = await uiSalesReq.json()
  const uiSales = uiSalesRes.total

  const googleAnalyticsReq = await fetch(`${getBasePath()}/api/views`)
  const googleAnalyticsRes = await googleAnalyticsReq.json()
  const googleAnalytics = googleAnalyticsRes.views

  return {
    props: {
      mailchimp,
      twitter,
      proSales,
      uiSales,
      github,
      googleAnalytics,
      post: { color: 'purple' },
    },
  }
}

class Dashboard extends React.Component {
  renderMetrics() {
    const metrics = [
      {
        label: 'GitHub Stars',
        value: this.props.github,
        link: 'https://github.com/dracula/dracula-theme',
      },
      {
        label: 'Twitter Followers',
        value: this.props.twitter,
        link: 'https://twitter.com/draculatheme',
      },
      {
        label: 'Mailchimp Subscribers',
        value: this.props.mailchimp,
        link: 'https://draculatheme.com/pro/journey#updates',
      },
      {
        label: 'Website Pageviews',
        value: this.props.googleAnalytics,
      },
      {
        label: 'Dracula UI Sales',
        value: this.props.uiSales,
        link: 'https://draculatheme.com/ui',
      },
      {
        label: 'Dracula PRO Sales',
        value: this.props.proSales,
        link: 'https://draculatheme.com/pro',
      },
    ]

    return metrics.map((metric, index) => {
      return (
        <div className={styles.metric} key={index}>
          <h4 className={styles.label}>
            {metric.label}
            {metric.link && (
              <a target="_blank" href={metric.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={styles.link}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            )}
          </h4>
          <p className={styles.value}>{metric.value}</p>
        </div>
      )
    })
  }
  render() {
    const title = 'Dashboard — Public metrics for Dracula Theme'
    const description =
      'Dracula it operates fully transparent and shares its metrics with the community.'

    return (
      <div className={styles.dashboard}>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Zeno Rocha" name="author" />
          <meta
            content="https://draculatheme.com/dashboard"
            property="og:url"
          />
          <meta
            content={'https://draculatheme.com/static/img/facebook.png'}
            property="og:image"
          />
        </Head>

        <div className={styles.container}>
          <h3>Dashboard</h3>
          <div className={styles.metrics}>{this.renderMetrics()}</div>
        </div>
      </div>
    )
  }
}

Dashboard.Layout = Blogpost

export default Dashboard