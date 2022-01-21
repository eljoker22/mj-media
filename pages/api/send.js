const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_api_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body);
        const msg = `
        Name: jon
        massege: hello world!
        `;
        const data = {
            to: 'eljokermano30@gmail.com',
            from: 'eljokermano50@gmail.com',
            subject: 'Test mail',
            text: msg,
            html: `<strong>${msg}</strong>`
        }
        try{
            await mail.send(msg);
            res.status(200).json({success: true})
        }
        catch (err) {
            res.status(200).json({success: false})
        }
        res.status(200).json({ name: 'John Doe' })
    }
}