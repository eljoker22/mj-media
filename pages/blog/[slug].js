import classes from '../../styles/Blog.module.css';
import Container from '@mui/material/Container';
import ReactMarkDown from 'react-markdown';
function SinglePost({post}) {
    console.log(post);
    return(
        <Container className="page-container" maxWidth="sm" style={{maxWidth: '1200px'}}>
            {post.data.map((p) => (
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
            ))}
        </Container>
    )
}

export default SinglePost;

export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/api/posts');
    const data = await res.json();
    const paths = data.data.map((post) => {
        return{ 
            params: {slug: post.attributes.title.replaceAll(' ', '-').toString()}
        }
    })
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug.replaceAll('-', ' ');
    const url = `http://localhost:1337/api/posts?filters[title][$eq]=${slug}&populate=thumbnail`;
    const decode = decodeURI(url);
    const encode = encodeURI(decode);
    const res = await fetch(encode);
    const post = await res.json();

    return{
        props: {post: post}
    }
}