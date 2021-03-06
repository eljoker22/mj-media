import Container from '@mui/material/Container'
import ReactMarkDown from 'react-markdown';
function CustomPage({page}) {
    if (!page) {
        return <h1>Loading...</h1>
    }
    return(
        <Container className="page-container" maxWidth="sm" style={{maxWidth: '1200px'}}>
            {page.data.map((p) => (
                <div key={p.id}>
                    <h1 style={{textAlign: 'center'}}>{p.attributes.title}</h1>
                    <div>
                        <ReactMarkDown>
                            {p.attributes.content}
                        </ReactMarkDown>
                    </div>
                </div>
            ))}
        </Container>
    )
}

export default CustomPage;

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/pages`);
    const data = await res.json();
    const paths = data.data.map((page) => {
        return{
            params: {title: page.attributes.title.split(' ').join('-').toString()},
        }
    })
    return{
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const title = context.params.title.split('-').join(' ');
    const decode = decodeURI(`${process.env.API_URL}/pages?filters[title][$eq]=${title}`);
    const encode = encodeURI(decode);
    const res = await fetch(encode);
    const page = await res.json();
    
    if (!page.data.length > 0) {
        return{
            notFound: true,
        }
    }

    return{
        props: {page: page},
        revalidate: 1
    }
}