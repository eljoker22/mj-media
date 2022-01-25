import { createGzip } from 'zlib'
import { SitemapStream } from 'sitemap'

const STATIC_URLS = [
    'http://localhost:3000/',
    'http://localhost:3000/blog'
]

const sitemapApi = async (req, res) => {
    // ensure response is XML & gzip encoded
    res.setHeader('Content-Type', 'application/xml')
    res.setHeader('Content-Encoding', 'gzip')

    // makes necessary API calls to get all the dynamic
    // urls from user-gen content
    const userGenPageUrls = await fetch(`http://localhost:1337/api/categories`);
    const pageUrls = await userGenPageUrls.json();

    const sitemapStream = new SitemapStream()
    const pipeline = sitemapStream.pipe(createGzip())

    // write static pages to sitemap
    STATIC_URLS.forEach((url) => {
        sitemapStream.write({ url })
    })

    // write user-generated pages to sitemap
    pageUrls.data.forEach((url) => {
        sitemapStream.write({ url })
    })

    sitemapStream.end()

    // stream write the response
    pipeline.pipe(res).on('error', (err) => {
        throw err
    })
}

export default sitemapApi