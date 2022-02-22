import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import classes from '../styles/markting.module.css';
import Svg from '../assest/svg/Marketing _Isometric.svg';
import SvgAnalysis from '../assest/svg/Market analysis _Two Color.svg';
import SvgMarkting from '../assest/svg/Marketing_Two Color.svg';
import SvgTarget from '../assest/svg/Target audience _Two Color.svg';
import SvgContact from '../assest/svg/New Message_Two Color.svg';
import { ButtonSocial } from '../component/Buttons'
import Head from 'next/head';

function MarktingPage() {
    return(
        <>
        <Head>
            <title>MJ Media - انشأ حملتك الأعلانية الأن!</title>
            <meta
                name="description"
                content="زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!
                روج لحسابك الاجتماعي و احصل على أقصى نمو على حسابات وسائل التواصل الاجتماعي الخاصة بك عن طريق زيادة متابعيك وإنشاء الحملات الأعلانية على فيس بوك وانستجرام و جوجل."
            />
            <link rel="canonical" href="https://mj-media.vercel.app/markting" />
            {/* facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://mj-media.vercel.app/" />
            <meta
                property="og:title"
                content="MJ Media"
            />
            <meta
                property="og:description"
                content="لبيع خدمات منصات التواصل الأجنماعى"
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
            <meta property="twitter:url" content="https://mj-media.vercel.app/" />
            <meta
                property="twitter:title"
                content="MJ Media"
            />
            <meta
                property="twitter:description"
                content="لبيع خدمات منصات التواصل الأجنماعى"
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
        <Container maxWidth="sm" style={{maxWidth: '1200px'}}>
            <Grid container spacing={3} style={{alignItems: 'start'}}>
                <Grid item sm={12} md={6}>
                    <div style={{marginTop: '60px'}}>
                        <h2 className={classes.title}>انشأ حملتك الأعلانية الأن!</h2>
                        <div className={classes.card}>
                            <img src="/icons/facebook.png" alt="انشأ حملتك الأعلانية الأن" />
                            <div>
                                <strong>فيس بوك</strong>
                                <p>حملات اعلانية احترافية لزيادة مبيعاتك والأرتقاء بعلامتك التجارية</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <img src="/icons/instgram.png" alt="انشأ حملتك الأعلانية الأن" />
                            <div>
                                <strong>انستاجرام</strong>
                                <p>الوصول لجمهورك على الأنستجرام وزيادة حضورك عن طريق الأعلانات الممولة</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <img src="/icons/google.png" alt="انشأ حملتك الأعلانية الأن" />
                            <div>
                                <strong>اعلانات على جوجل واليوتيوب</strong>
                                <p>الوصول لجمهورك من خلال محرك بحث جوجل يعد ضرورة لأى علامة تجارية تهدف الى توسيع نطاقها!</p>
                            </div>
                        </div>  
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.svg}>
                        <Svg />
                    </div>
                </Grid>
            </Grid>
            <div className={classes.stepsSection}>
                <h2 className={classes.stepsTitle}>خطوات حملتك الأعلانية</h2>
                <Grid container spacing={5}>
                    <Grid item md={4}>
                        <div className={classes.steps}>
                            <SvgAnalysis />
                            <p>الوصول لجمهورك الصحيح فى أى مكان ومن خلال أى منصة بواسطة دراسة منتجك والسوق الخاص بك وتحليل خطط منافسيك والحصول على أفضل نتائج</p>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className={classes.steps}>
                            <SvgTarget />
                            <p>جذب الجمهور الصحيح لايأتى الا بتحليل الجمهور الذى تستهدفه بشكل جيد وتوسيع دائرة عملائك</p>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className={classes.steps}>
                            <SvgMarkting />
                            <p> زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى و الأرتقاء بحساباتك على منصات التواصل الأجتماعى والوصول لجماهير جديدة</p>
                        </div>
                    </Grid>     
                </Grid>
            </div>
            <div>
                <Grid container spacing={5} style={{alignItems: 'center'}}>
                    <Grid item md={6}>
                        <h2 className={classes.title}>انشأ حملتك الأعلانية الأن!</h2>
                        <p style={{marginBottom: '20px'}}> زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى عن طريق حملتك الأعلانية على مختلف المنصات</p>
                        <div className={classes.btnCont}>
                            <ButtonSocial icon="facebook-app-symbol.png">
                                فيس بوك
                            </ButtonSocial>
                            <ButtonSocial icon="whatsapp.png">
                                واتساب
                            </ButtonSocial>
                        </div>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={classes.containerSvg}>
                            <SvgContact />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </>
    )
}

export default MarktingPage;