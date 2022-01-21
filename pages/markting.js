import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import classes from '../styles/markting.module.css';
import Svg from '../assest/svg/Marketing _Isometric.svg';
import SvgAnalysis from '../assest/svg/Market analysis _Two Color.svg';
import SvgMarkting from '../assest/svg/Marketing_Two Color.svg';
import SvgTarget from '../assest/svg/Target audience _Two Color.svg';
import SvgContact from '../assest/svg/New Message_Two Color.svg';
import { ButtonSocial } from '../component/Buttons'
function MarktingPage() {
    return(
        <Container maxWidth="sm" style={{maxWidth: '1200px'}}>
            <Grid container spacing={3} style={{alignItems: 'start'}}>
                <Grid item sm={12} md={6}>
                    <div style={{marginTop: '60px'}}>
                        <h2 className={classes.title}>انشأ حملتك الأعلانية الأن!</h2>
                        <div className={classes.card}>
                            <img src="/icons/facebook.png" />
                            <div>
                                <strong>فيس يوك</strong>
                                <p>زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <img src="/icons/instgram.png" />
                            <div>
                                <strong>انستاجرام</strong>
                                <p>زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <img src="/icons/google.png" />
                            <div>
                                <strong>فيس يوك</strong>
                                <p>زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!</p>
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
                            <p>زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى! زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى</p>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className={classes.steps}>
                            <SvgTarget />
                            <p>زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى! زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى</p>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className={classes.steps}>
                            <SvgMarkting />
                            <p> زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!</p>
                        </div>
                    </Grid>     
                </Grid>
            </div>
            <div>
                <Grid container spacing={5} style={{alignItems: 'center'}}>
                    <Grid item md={6}>
                        <h2 className={classes.title}>انشأ حملتك الأعلانية الأن!</h2>
                        <p style={{marginBottom: '20px'}}> زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!</p>
                        <div style={{display: 'flex'}}>
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
    )
}

export default MarktingPage;