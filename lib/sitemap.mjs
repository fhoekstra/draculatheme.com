import { getBasePath } from './environment'
import { globby } from 'globby'
import prettier from 'prettier'
import { writeFileSync } from 'fs'

const pages = await globby(['pages/*.tsx', 'posts/**/*.mdx', '!pages/_*.tsx'])

const urlTags = pages
  .map(file =>
    file
      .replace('pages', '')
      .replace('posts/content', '')
      .replace('.tsx', '')
      .replace('.mdx', '')
  )
  .map(path => (path === '/index' ? '/' : path))
  .map(
    path => `
      <url>
          <loc>${getBasePath()}${path}</loc>
      </url>
    `
  )
  .join('')

const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlTags}
  </urlset>
`

const prettierConfig = await prettier.resolveConfig('./prettierrc')
const formatted = prettier.format(sitemap, {
  ...prettierConfig,
  parser: 'html',
})

writeFileSync('public/sitemap.xml', formatted)
