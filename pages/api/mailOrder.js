const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_api_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body);
        const data = {
            to: body.email,
            from: {
                email: 'mjmedia@mj-mediaa.com',
                name: 'MJ Media'
            },
            subject: 'Order Details',
            templateId: 'd-71e916a2b6bb4556a2aca7b98cce0385',
            dynamic_template_data: {
                orderId: body.orderId,
                name: body.clinetName,
                plan: body.plan,
                price: body.price,
                date: body.dateOrder,
            },
        };
            mail.send(data).then(() => { console.log('succes') }).catch((err) => console.log(err));
        res.status(200).json({ name: 'John Doe' })
    }
}