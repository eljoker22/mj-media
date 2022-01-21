import classes from '../../styles/Home.module.css';
import Grid from '@mui/material/Grid';


function HowWork() {
    const dataCards = [
        {
            title: 'أختر الباقة التى تريدها',
            img: '/icons/cellphone.png'
        },
        {
            title: 'أضف الرابط الخاص بك',
            img: '/icons/login.png'
        },
        {
            title: 'أستمتع بمراقبة النتائج',
            img: '/icons/network.png'
        },
    ];
    return(
        <div className={classes.howWork}>
            <h2 className={classes.sectionTitle} style={{marginBottom: '15px'}}>كيف يعمل الموقع ؟</h2>
            <p style={{textAlign: 'center', marginBottom: '35px'}}>كل ما عليك هو أختيار الخدمة التى تريدها وأضافة الرابط الخاص بك</p>
            <Grid container spacing={3} style={{alignItems: 'center'}}>
                {dataCards.map((card) => {
                    return <Grid key={card.title} item xs={4} sm={4} md={4}>
                            <div className={classes.cardHowWork}>
                                <img src={card.img} alt={card.title} />
                                <h3>
                                    {card.title}
                                </h3>
                            </div>
                        </Grid>
                })}
            </Grid>
        </div>
    )
}

export default HowWork;