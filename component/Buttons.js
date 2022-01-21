import classes from '../styles/Buttons.module.css';

export const ButtonHome = ({children}) => {
    return(
        <button className={classes.btn}>
            {children}
        </button>
    )
}

export const ButtonSectionCard = ({children}) => {
    return(
        <button className={classes.btnCard}>
            {children}
        </button>
    )
}

export const ButtonCard = ({children}) => {
    return(
        <button style={{width: '100%'}} className={classes.btn}>
            {children}
        </button>
    )
}

export const ButtonFilter = ({children ,active}) => {
    return(
        <button className={`${classes.btnFilter} ${active && classes.active}`}>
            {children}
        </button>
    )
}

export const ButtonCheckout = ({children}) => {
    return(
        <button className={`${classes.btn} ${classes.btnCheckout}`}>
            {children}
        </button>
    )
}

export const ButtonContact = ({children}) => {
    return(
        <button type="submit" className={`${classes.btn} ${classes.btnContact}`}>
            {children}
        </button>
    )
}

export const ButtonSocial = ({children ,icon}) => {
    return(
        <button className={`${classes.btn} ${classes.btnSocial}`}>
            {children}
            <img src={`/icons/${icon}`} />
        </button>
    )
}


