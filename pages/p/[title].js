import Container from '@mui/material/Container'
import ReactMarkDown from 'react-markdown';
function CustomPage({page}) {
    console.log(page)
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
    const res = await fetch('http://localhost:1337/api/pages');
    const data = await res.json();
    const paths = data.data.map((page) => {
        return{
            params: {title: page.attributes.title.replaceAll(' ', '-').toString()},
        }
    })
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const title = context.params.title.replaceAll('-', ' ');
    const decode = decodeURI(`http://localhost:1337/api/pages?filters[title][$eq]=${title}`);
    const encode = encodeURI(decode);
    const res = await fetch(encode);
    const page = await res.json();
    return{
        props: {page: page}
    }
}