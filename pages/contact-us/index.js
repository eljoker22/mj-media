import classes from '../../styles/contact.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import SvgEmail from '../../assest/svg/Sending emails_Two Color.svg';
import { ButtonContact } from '../../component/Buttons';
function ContactUs() {
    return(
        <div className="page-container">
            <div className={classes.contactPage}>
            <Container maxWidth="sm" style={{maxWidth: '1200px'}}>
                <h1>اتصل بنا</h1>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.containerForm}>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input type="text" className={classes.input} placeholder="الأسم..." />
                                <input type="email" className={classes.input} placeholder="البريد الألكترونى..." />
                                <textarea className={`${classes.input} ${classes.textarea}`} placeholder="الرسالة الخاصة بك..."></textarea>
                                <ButtonContact>
                                    ارسال
                                </ButtonContact>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <div className={classes.svg}>
                                <SvgEmail />
                            </div>
                            <div className={classes.icons}>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/MJ.MEDIA1/">
                                        <span>
                                            <img src="/icons/facebook-app-symbol.png" alt="massenger" />
                                        </span>
                                    </a>

                                    <a target="_blank" rel="noreferrer" href="https://wa.me/01201852421">
                                        <span>
                                            <img src="/icons/whatsapp.png" alt="whatsApp" />
                                        </span>
                                    </a>

                                    <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/#search/mjmediasponser@gmail.com">
                                        <span>
                                            <img src="/icons/gmail.png" alt="gmail" />
                                        </span>
                                    </a>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </div>
    )
}

export default ContactUs;
