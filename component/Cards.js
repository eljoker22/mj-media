import classes from "../styles/Cards.module.css";
import Link from 'next/link'
import { ButtonCard, ButtonSectionCard } from './Buttons'

export function CardSection({title, desc, img, link, color}) {
    const url = link ? link.split(' ').join('-')  : '';
    return(
        <div className={classes.cardSection}>
            <div className={classes.overlay} style={{background: color}}>
                <img src={img} alt={title} />
                <Link href={`/${url}`}>
                    <a>
                    <ButtonSectionCard>
                        عرض الباقات
                    </ButtonSectionCard>
                    </a>
                </Link>
            </div>
            <img src={img} alt={title} />
            <div className={classes.text}>
                <h3>{title}</h3>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export function CardPlan({ id, title, price, arab, color, image, active}) {
    return(
        <div className={`${classes.cardPlan} ${active && classes.active}`}>
            <div className={classes.overlayPlan}>
                <img src={image} alt={title} />
            </div>
            <div className={classes.contentCard}>
                <h3>{title}</h3>
                <strong style={{fontSize: '40px'}}>${price}</strong>
                <p className={classes.typeResult}>
                    {arab ? 'عرب فقط' : 'من جميع أنحاء العالم'}
                </p>
                <p>لانحتاج الى كلمة المرور</p>
                <p style={{marginBottom: '20px'}}>تنفيذ سريع وأمن</p>
                    <Link href={`/checkout/${id}`}>
                    <a>
                        <ButtonCard>
                            شراء الأن
                        </ButtonCard>
                    </a>
                    </Link>
            </div>
            
        </div>
    )
}