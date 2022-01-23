import React, { useState } from 'react'
import classes from '../../styles/Checkout.module.css';
import {ButtonCheckout} from '../../component/Buttons'
import {PopupSuccessPay} from '../../component/Popups';
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js';

function CheckoutPage({plan}) {
    const planImage = plan && plan.data.attributes.categories.data[0].attributes.image.data.attributes.url;
    const [paymentMethod, setPaymentMethod] = useState('CARD');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [popup, setPopup] = useState(false);
    const amount = plan && plan.data.attributes.price.toFixed(2).toString();
    const planName = paln && plan.data.attributes.title;

    return(
        <div className="page-container">
            {plan && <div className={classes.checkoutPage}>
        <div className={classes.boxCheckout}>
            <h2>تفاصيل الطلب</h2>
            <p className={classes.cardInfo}>
                <span>
                    {planName}
                </span>
                <img src={planImage} />
            </p>
            <p className={classes.cardInfo}>
                <span> 
                    {plan.data.attributes.arab_follower ? 'عرب فقط' : 'من جميع انحاء العالم'}
                </span>
                <img src="/icons/location.png" />
            </p>
            <p className={classes.cardInfo}>
                <span>
                    ${plan.data.attributes.price}
                </span>
                <img src="/icons/dollar.png" />
            </p>

            <h3>ادخل معلومات الطلب</h3>
            <form>
                <div className={classes.containerInput}>
                    <img src="/icons/link-input.png" />
                    <input 
                    type="text" 
                    className={classes.inputText}
                    placeholder='ادخل الرابط'
                    onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <div className={classes.containerInput}>
                    <img src="/icons/email.png" />
                    <input 
                    type="text" 
                    className={classes.inputText}
                    placeholder='البريد الألكترونى'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes.payments}>
                <h3>اختر وسيلة دفع</h3>
                <p 
                className={paymentMethod === 'CARD' ? classes.active : ''}
                onClick={() => setPaymentMethod('CARD')}>
                    <img src="/icons/visa.png" />
                    <span>فيزا أو ماستركارد</span>
                </p>
                <p 
                className={paymentMethod === 'PAYPAL' ? classes.active : ''}
                onClick={() => setPaymentMethod('PAYPAL')}>
                    <img src="/icons/paypal.png" />
                    <span>بايبال</span>
                </p>
                </div>
                {paymentMethod === 'CARD' &&
                <ButtonCheckout>
                    الدفع
                </ButtonCheckout>
                }
            </form>
            {paymentMethod === 'PAYPAL' &&
            <PayPalScriptProvider options={{
                "client-id": "AXH_cpLK8MbWtNNhc-s5_AamEJCyQ_FfwCZ-J7aaOGIEhwjcx6uJTJYEOMBPRHJ9aY7JKGcUdl-21Ffh",
                "disable-funding": "credit,card"
                }}>
                <PayPalButtons
                    style={{"layout":"vertical","color":"blue","height":55,"shape": "pill"}}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: amount,
                                    }
                                }
                            ]
                        }).then((orderId) => {
                            return orderId;
                        })
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            const amountPay = details.purchase_units[0].amount.value;
                            const currency = details.purchase_units[0].amount.currency_code;    
                            const status = details.status === 'COMPLETED' ? true : false;
                            
                            fetch('/api/createOrder', {
                                method: 'post',
                                body: JSON.stringify({
                                    data: {
                                        orderId: data.orderID.toString(),
                                        plan: planName,
                                        clinetName: name,
                                        email: email,
                                        link: link,
                                        payment: paymentMethod,
                                        price: amountPay,
                                        currency: currency,
                                        completed: status,
                                    }
                                })
                            })
                            console.log(data);
                            console.log(details);
                        }).then(() => setPopup(true))
                    }}
                />
            </PayPalScriptProvider>
            }
        </div>
        {popup && <PopupSuccessPay setPopup={setPopup} open={popup} />}
        </div>}
        </div>
    )
}

export default CheckoutPage;

export async function getStaticPaths() {
    const res = await fetch(`${process.env.API_URL}/plans`);
    const allPlans = await res.json();
    const paths = allPlans.data.map((plan) => {
        return {
            params: {id: plan.id.toString()},
        }
    })

    return{
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`${process.env.API_URL}/plans/${id}?populate[categories][populate]=image`);
    const data = await res.json();
    
    if (!data) {
        return{
            notFound: true,
        }
    }

    return{
        props: {
            plan: data
        }
    }
}