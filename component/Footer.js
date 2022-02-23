import classes from '../styles/Footer.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Footetr() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const getLinks = async () => {
            const res = await fetch(`${process.env.API_URL}/navgetions`);
            const data = await res.json();
            setLinks(data.data);
        } 
        getLinks();
    }, [])

    return(
        <footer className={classes.footer}>
            <div className={classes.topFooter}>
                    <Link href="/">
                    <a>
                        <div className={classes.social}>
                            <a href="https://www.facebook.com/MJ.MEDIA1/"><img src="/icons/facebook.png" alt="facebook" /></a>
                            <a href="https://youtube.com/channel/UCkS_rmUqS6xPG8C0pe6TptQ"><img src="/icons/youtube.png" alt="youtube" /></a>
                            <a href="https://www.instagram.com/mj_media_0/"><img src="/icons/instgram.png" alt="instgram" /></a>
                            <a href="https://mobile.twitter.com/Mjmedia8"><img src="/icons/twitter.png" alt="twitter" /></a>
                        </div>
                    </a>
                    </Link>

                <nav>
                    <ul>
                    {links && links.map((link) => (
                        <Link key={link.id} href={link.attributes.link}>
                            <a>
                                <li>{link.attributes.title}</li>
                            </a>
                        </Link>
                    ))}
                    </ul>
                </nav>
            </div>
            <div className={classes.copy}>
                <div>
                    <img src="/icons/visa.png" alt="Visa" />
                    <img src="/icons/paypal2.png" alt="paypal" />
                </div>
                <p style={{color: '#555'}}>
                    &copy; كل الحقوق محفوظة MJ Media
                </p>
            </div>
        </footer>
    )
}

export default Footetr;

