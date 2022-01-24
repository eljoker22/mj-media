import React, { useEffect , useState } from 'react';
import classes from '../styles/Category.module.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CardPlan } from '../component/Cards';
import { ButtonFilter } from '../component/Buttons';
import Head from 'next/head';


export default function PlansPage({category}) {

    const plans = category && category.data[0] ? category.data[0].attributes.plans.data : [];
    const [types, setTypes] = useState([]);
    const [activeType, setActiveType] = useState(null);
    const [arab, setArab] = useState(false);
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
        return ' ';
    }

    return(
        <>
        {category && category.data.map((caty) => {
            const urlPage = `https://mj-media.vercel.app/${caty.attributes.title.split(' ').join('-')}`;
            return(
                <>
                <Head>
                    <title>MJ Media - {caty.attributes.titleSeo}</title>
                    <meta
                        name="description"
                        content={caty.attributes.descreption}
                    />
                    <link rel="canonical" href={urlPage} />
                    {/* facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={urlPage} />
                    <meta
                        property="og:title"
                        content={`MJ MEDIA - ${caty.attributes.titleSeo}`}
                    />
                    <meta
                        property="og:description"
                        content={caty.attributes.descreption}
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
                    <meta property="twitter:url" content={urlPage} />
                    <meta
                        property="twitter:title"
                        content={`MJ MEDIA - ${caty.attributes.titleSeo}`}
                    />
                    <meta
                        property="twitter:description"
                        content={caty.attributes.descreption}
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

                <div key={caty.attributes.title} className={classes.CategoryPage}>
                    <Container className="page-container" maxWidth="sm" style={{maxWidth: '1200px'}}>
                        <h1>{caty.attributes.title}</h1>
                        <div className={classes.types}>
                            {plans.length > 0 && types.map((type) => (
                                <a key={type} onClick={() => setActiveType(type)}>
                                <ButtonFilter active={type === activeType ? true : false}>
                                    {type}
                                </ButtonFilter>
                                </a>
                            ))}
                        </div>
                        <div style={{textAlign: 'center'}}>
                            {plans.length > 0 && 
                                <div className={classes.arabFilter}>
                                <div>
                                    <a onClick={() => setArab(true)}>
                                        <ButtonFilter active={arab ? true : false}>
                                            عرب فقط
                                        </ButtonFilter>
                                    </a>
                                </div>
                                <div>
                                    <a onClick={() => setArab(false)}>
                                        <ButtonFilter active={!arab ? true : false}>
                                            جميع انحاء العالم
                                        </ButtonFilter>
                                    </a>
                                </div>
                                </div>
                            }
                        </div>
                        <Grid container spacing={3} style={{margin: '20px 0'}}>
                            {plans.length > 0 ? plans.map(plan => {
                                const arabActive = plan.attributes.arab_follower === arab ? true : false;
                                const active = plan.attributes.types.data.attributes.name === activeType ? true : false;
                                
                                return active && arabActive && <Grid key={plan.id} item xs={12} sm={12} md={3}>
                                                        <CardPlan 
                                                        id={plan.id}
                                                        title={plan.attributes.title} 
                                                        price={plan.attributes.price}
                                                        arab={plan.attributes.arab_follower}
                                                        image={caty.attributes.image.data.attributes.url}
                                                        color={plan.attributes.color}
                                                        active={active && arabActive ? true : false}
                                                        />
                                                    </Grid>
                            })
                            : 
                            <h3>لا توجد باقات فى الوقت الحالى ولكن ستضاف قريبا.</h3>}
                        </Grid>
                    </Container>
                </div>
                </>
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
    
    if (!data.data.length > 0) {
        return{
            notFound: true,
        }
    }

    return{
        props: {
        category: data
        },
        revalidate: 1
    }
}