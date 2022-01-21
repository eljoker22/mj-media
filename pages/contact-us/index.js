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
                                <Link href="">
                                    <a target="_blank">
                                        <span>
                                            <img src="/icons/facebook-app-symbol.png" />
                                        </span>
                                    </a>
                                </Link>
                                <Link href="https://wa.me/01208128876">
                                    <a target="_blank">
                                        <span>
                                            <img src="/icons/whatsapp.png" />
                                        </span>
                                    </a>
                                </Link>
                                <Link href="">
                                    <a target="_blank">
                                        <span>
                                            <img src="/icons/gmail.png" />
                                        </span>
                                    </a>
                                </Link>
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
