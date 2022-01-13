import React from 'react'
import Head from 'next/head'
import Blogpost from '../layouts/Blogpost'

export async function getStaticProps() {
  const meta = {
    title: 'DracTest // Zeno Rocha',
    description: '',
    tagline: 'Dracula Test.',
    image: '/static/images/watch-opt.jpg',
    gradientColor: 'cyan-green',
    selectionColor: 'green',
  }

  return { props: { post: meta } }
}

function DracTest(props) {
  const { title, description, image } = props

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://zenorocha.com/DracTest" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />

        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      </Head>

      <div>
        <model-viewer
          src="/static/img/dracula.glb"
          camera-controls
          style={{ width: 700, height: 700, margin: '0 auto' }}
        />
      </div>
    </div>
  )
}

DracTest.Layout = Blogpost

export default DracTest