import classes from '../styles/Footer.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Footetr() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const getLinks = async () => {
            const res = await fetch(`https://social-media-shop.herokuapp.com/api/navgetions`);
            const data = await res.json();
            setLinks(data.data);
        } 
        getLinks();
    }, [])
    console.log(links)
    return(
        <footer className={classes.footer}>
            <div className={classes.topFooter}>
                <div className={classes.logo}><span>MJ</span> Media.</div>
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
                <p>
                    Copyright &copy; 2022 {'  '}
                    <span className={classes.logo}><span>MJ</span> Media.</span> 
                    {'  '}  all right reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footetr;

