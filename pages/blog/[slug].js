import classes from '../../styles/Blog.module.css';
import Container from '@mui/material/Container';
import ReactMarkDown from 'react-markdown';
import Head from 'next/head';
function SinglePost({post}) {

    return(
    <>
        <Container className="page-container" maxWidth="sm" style={{maxWidth: '1200px'}}>
            {post.data.map((p) => (
                <>
                    <Head>
                    <title>MJ Media - {p.attributes.title}</title>
                    <meta
                        name="description"
                        content={p.attributes.title}
                    />
                    <link 
                        rel="canonical" 
                        href={`https://mj-media.vercel.app/blog/${p.attributes.title.split(' ').join('-')}`}
                    />
                    {/* facebook */}
                    <meta property="og:type" content="website" />
                    <meta 
                    property="og:url" 
                    content={`https://mj-media.vercel.app/blog/${p.attributes.title.split(' ').join('-')}`} 
                    />
                    <meta
                        property="og:title"
                        content={`MJ MEDIA - ${p.attributes.title}`}
                    />
                    <meta
                        property="og:description"
                        content={p.attributes.title}
                    />
                    <meta 
                        property="og:image"
                        content="https://res.cloudinary.com/jokermo/image/upload/v1642886046/phil_desforges_Hxp_x_D_Xs_O_Ss_unsplash_3bb82b709b.jpg"
                    />
                    <meta 
                        property="og:site_name" 
                        content="MJ Media" 
                    />
                    {/* twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta 
                        property="twitter:url" 
                        content={`https://mj-media.vercel.app/blog/${p.attributes.title.split(' ').join('-')}`}
                        />
                    <meta
                        property="twitter:title"
                        content={`MJ MEDIA - ${p.attributes.title}`}
                    />
                    <meta
                        property="twitter:description"
                        content={p.attributes.title}
                    />
                    <meta 
                        property="twitter:image"
                        content="https://res.cloudinary.com/jokermo/image/upload/v1642886046/phil_desforges_Hxp_x_D_Xs_O_Ss_unsplash_3bb82b709b.jpg"
                    />
                    <meta 
                        name="twitter:site" 
                        content="MJ Media" 
                    />
                    </Head>

                    <div key={p.id} className={classes.singlePost}>
                        <h1>{p.attributes.title}</h1>
                        <p className={classes.date}>تاريخ النشر {p.attributes.date}</p>
                        <img src={p.attributes.thumbnail.data.attributes.url} alt={p.attributes.title} />
                        <div className={classes.content}>
                            <ReactMarkDown>
                                {p.attributes.content}
                            </ReactMarkDown>
                        </div>
                    </div>
                </>
            ))}
        </Container>
    </>
    )
}

export default SinglePost;

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/posts`);
    const data = await res.json();
    const paths = data.data.map((post) => {
        return{ 
            params: {slug: post.attributes.title.split(' ').join('-').toString()}
        }
    })
    return{
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug.split('-').join(' ');
    const url = `${process.env.API_URL}/posts?filters[title][$eq]=${slug}&populate=thumbnail`;
    const decode = decodeURI(url);
    const encode = encodeURI(decode);
    const res = await fetch(encode);
    const post = await res.json();
    
    if (!post.data.length > 0) {
        return{
            notFound: true,
        }
    }

    return{
        props: {post: post},
        revalidate: 1
    }
}