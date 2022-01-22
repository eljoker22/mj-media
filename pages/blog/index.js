import classes from '../../styles/Blog.module.css';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from 'next/link';
function Blog({posts}) {
    console.log(posts);
    return(
        <Container className="page-container" maxWidth="sm" style={{maxWidth: '1200px'}}>
            <div style={{textAlign: 'center'}}>
                <h1 className={classes.hBlog}>المدونة</h1>
            </div>
            <Grid container spacing={3}>
            {posts.data.map((post) => (
                <Grid key={post.id} item xs={12} sm={6} md={4}>
                    <Link href={`/blog/${post.attributes.title.replaceAll(' ', '-')}`}>
                        <a>
                        <div className={classes.post}>
                            <img src={post.attributes.thumbnail.data.attributes.formats.small.url} />
                            <div>
                                <h3>{post.attributes.title}</h3>
                            </div>
                        </div>
                        </a>
                    </Link>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
}

export default Blog;

export async function getStaticProps() {
    const res = await fetch(`${process.env.API_URL}/posts?populate=Date,thumbnail`);
    const data = await res.json();
    return{
        props: {posts: data}
    }
}