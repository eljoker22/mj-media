import classes from '../styles/Pop.module.css';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export function PopupSuccessPay({setPopup, open}) {
    const [animate, setAnimate] = useState(false);
    return(
        <>
        <div className={`${classes.overlay} ${animate && classes.animate}`}></div>
        <div className={`${classes.popup} ${animate && classes.animate}`}>
            <IconButton className={classes.btnClose} onClick={() => {
                setAnimate(true);
                setTimeout(() => {
                    setAnimate(false);
                    setPopup(false);
                }, 1000)
            }}>
                <img src="/icons/close.png" />
            </IconButton>
            <img src="/icons/accept.png" alt="succces payment" />
            <h3>لقد تم استلام طلبك</h3>
            <p>سنبدأ العمل على طلبك وستصلك تفاصيل الطلب على بريدك الألكترونى</p>
        </div>
        </>
    )
}