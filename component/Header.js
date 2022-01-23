import classes from '../styles/Header.module.css';
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadingSwitcher } from '../state/actions';
export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [services, setServices] = useState(null);
    const [sticky, setSticky] = useState(false);
    const [active, setActive] = useState(false);
    const mediaQuery = useMediaQuery(`(max-width: 768px)`);
    useEffect(() => {
        const getServices = async () => {
            const res = await fetch(`https://social-media-shop.herokuapp.com/api/services`);
            const data = await res.json();
            setServices(data)
        }
        getServices();

        /* set Sticky navbar */
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setSticky(true);
            }else{
                setSticky(false);
            }
        })
    }, []);

    useEffect(() => {
        !services ? dispatch(loadingSwitcher(true)) : dispatch(loadingSwitcher(false));
    }, [services]);

    return(
            <header className={`${classes.header} ${sticky ? classes.sticky : ''}`}>
                <Container maxWidth="sm" style={{maxWidth: '1200px'}}>
                <div className={classes.flex}>
                    <div className={classes.logo}><span>MJ</span> Media.</div>
                    {!mediaQuery && 
                    <nav>
                        <ul>
                        {services && services.data.map((service) => (
                            <Link key={service.id} href={`/${service.attributes.link.replace(' ', '-')}`}>
                                <a 
                                className={router.query.slug ? 
                                    router.query.slug === service.attributes.link.replace(' ', '-') ? 
                                    classes.active 
                                    : '' 
                                : router.pathname.replace('/', '') === service.attributes.link ? classes.active : ''}>
                                    <li>{service.attributes.name}</li>
                                </a>
                            </Link>
                        ))}
                        </ul>
                    </nav>}
                    {mediaQuery &&
                        <div className={`${classes.bars} ${active ? classes.active : ''}`} onClick={() => setActive(!active)}>
                            <span className={classes.bar}></span>
                            <span className={classes.bar}></span>
                            <span className={classes.bar}></span>
                        </div>
                    }
                </div>
                {mediaQuery &&
                <nav className={active ? classes.active : ''}>
                    <ul>
                        {services && services.data.map((service) => (
                            <Link key={service.id} href={`/${service.attributes.link.replace(' ', '-')}`}>
                                <a 
                                onClick={() => setActive(false)}
                                className={router.query.slug ? 
                                    router.query.slug === service.attributes.link.replace(' ', '-') ? 
                                    classes.active 
                                    : '' 
                                : router.pathname.replace('/', '') === service.attributes.link ? classes.active : ''}>
                                    <li>{service.attributes.name}</li>
                                </a>
                            </Link>
                        ))}
                    </ul>
                </nav>}
                </Container>
            </header>
    )
}
