import RSS from 'rss'
import { allBlogPosts } from 'contentlayer/generated'
import { getBasePath } from './environment'
import { writeFileSync } from 'fs'

const feed = new RSS({
  title: 'Dracula Theme Blog Posts',
  feed_url: `${getBasePath()}/rss.xml`,
  site_url: `${getBasePath()}`,
  language: 'en',
})

allBlogPosts
  .map(post => ({
    author: post.author.name,
    date: blog.publishedAt,
    description: post.excerpt,
    guid: `${getBasePath()}/blog/${post.slug}`,
    title: post.title,
    url: `${getBasePath()}/blog/${post.slug}`,
  }))
  .forEach(item => {
    feed.item(item)
  })

writeFileSync('./public/rss.xml', feed.xml({ indent: true }))
