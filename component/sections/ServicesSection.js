import classes from '../../styles/Home.module.css';
import {CardSection} from '../Cards';
import Grid from '@mui/material/Grid';

function ServicesSection({services, myRef}) {
    console.log(services);
    
    return(
        <section ref={myRef} className={classes.serviceSection}>
            <h2 className={classes.sectionTitle}>ماذا نقدم ؟</h2>
            <Grid container spacing={3}>
            {services.data.map((card) => {
                return <Grid key={card.id} item xs={12} sm={6} md={4}>
                        <CardSection 
                        title={card.attributes.name}
                        desc={card.attributes.descreption}
                        img={card.attributes.icon.data.attributes.url}
                        link={card.attributes.link}
                        color={card.attributes.color}
                        />
                        </Grid>
            })}
            </Grid>
        </section>
    )
}

export default ServicesSection;


