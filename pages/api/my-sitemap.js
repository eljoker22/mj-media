import { getPosts } from '../../lib/posts';
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
    try{
          // An array with your links
    const links = [];
    
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    data.data.map((post) => {
        links.push({ url: `/${post.title}`, changefreq: "daily", priority: 0.9 })
    })

    const pages = ["/contact", "/blog"];
    pages.forEach((post) => {
        links.push({ url: `${post}`, changefreq: "daily", priority: 0.9 })
    })
    // Create a stream to write to
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);

    } catch(err){
        console.log(err);
    }
};