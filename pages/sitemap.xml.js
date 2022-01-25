import React from 'react';

const EXTERNAL_DATA_URL = 'https://mj-media.vercel.app';

const createSitemap = (categories, posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
        <loc>${EXTERNAL_DATA_URL}</loc>
        </url>
        <url>
        <loc>${EXTERNAL_DATA_URL}/markting</loc>
        </url>
        ${categories && categories.data.map(({ attributes }) => {
            return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}/${attributes.title.split(' ').join('-')}`}</loc>
                </url>
            `;
        }).join('')}
        ${posts && posts.data.map(({ attributes }) => {
            return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}/blog/${attributes.title.split(' ').join('-')}`}</loc>
                </url>
            `;
        }).join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
static async getInitialProps({ res }) {
    const request = await fetch(`${process.env.API_URL}/categories`);
    const req = await fetch(`${process.env.API_URL}/posts`);
    const categories = await request.json();
    const posts = await req.json();

    if (!categories && !posts) {
        return {
            notFound: true
        }
    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(categories, posts));
    res.end();
}
}

export default Sitemap;