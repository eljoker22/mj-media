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
                        <div className={classes.logo}>
                            <img src="/logo.png" alt="MJ Media" />
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

