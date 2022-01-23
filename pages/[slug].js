import React, { useEffect , useState } from 'react';
import classes from '../styles/Category.module.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CardPlan } from '../component/Cards';
import { ButtonFilter } from '../component/Buttons';

export default function PlansPage({category}) {

    const plans = category.data[0] ? category.data[0].attributes.plans.data : [];
    const [types, setTypes] = useState([]);
    const [activeType, setActiveType] = useState(null);
    useEffect(() => {
        if (plans.length > 0) {
            const typeArr = [];
            plans.forEach((plan) => {
                let typeName = plan.attributes.types.data.attributes.name;
                if (!typeArr.includes(typeName)) {
                    typeArr.push(typeName);
                }
            })
            setActiveType(typeArr[0]);
            setTypes(typeArr);
        }
    }, [category])

    if (!category) {
        return <h1>Loading...</h1>
    }

    return(
        <>
        {category.data.map((caty) => {
            return(
                <div key={caty.attributes.title} className={classes.CategoryPage}>
                    <Container className="page-container" maxWidth="sm" style={{maxWidth: '1200px'}}>
                        <h1>{caty.attributes.title}</h1>
                        <div style={{textAlign: 'center'}}>
                            {types.map((type) => (
                                <a key={type} onClick={() => setActiveType(type)}>
                                <ButtonFilter active={type === activeType ? true : false}>
                                    {type}
                                </ButtonFilter>
                                </a>
                            ))}
                        </div>
                        <Grid container spacing={3} style={{margin: '20px 0'}}>
                            {plans.map(plan => {
                                const active = plan.attributes.types.data.attributes.name === activeType ? true : false;
                                
                                return active && <Grid key={plan.id} item xs={12} sm={12} md={3}>
                                                    <CardPlan 
                                                    id={plan.id}
                                                    title={plan.attributes.title} 
                                                    price={plan.attributes.price}
                                                    arab={plan.attributes.arab_follower}
                                                    image={caty.attributes.image.data.attributes.url}
                                                    color={plan.attributes.color}
                                                    active={active}
                                                    />
                                                </Grid>
                            })}
                        </Grid>
                    </Container>
                </div>
            ) 
        })}
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/categories`);
    const cats = await res.json();

    const paths = cats.data.map((cat) => {
        return{ 
            params: {slug: cat.attributes.slug.split(' ').join('-').toString()},
        }
    })
    return{
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug.split('-').join(' ');
    const urlApi = `${process.env.API_URL}/categories?filters[slug][$eq]=${slug}&populate[plans][sort]=price:asc&populate[plans][populate]=types&populate=image`;
    const url = decodeURI(urlApi);
    const urlEn = encodeURI(url);
    const res = await fetch(urlEn);
    const data = await res.json();
    
    return{
        props: {
        category: data
        },
        revalidate: 1
    }
}