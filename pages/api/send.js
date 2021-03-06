const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_api_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body);
        const data = {
            to: 'yussremohamed@gmail.com',
            from: 'clients@mj-mediaa.com',
            subject: 'support mj media',
            templateId: 'd-a36e94ec40be4520a2af1130224fe894',
            dynamic_template_data: {
                name: body.name,
                email: body.email,
                msg: body.msg
            },
        };
            mail.send(data).then(() => { console.log('succes') }).catch((err) => console.log(err));
        res.status(200).json({ name: 'John Doe' })
    }
}