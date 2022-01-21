


export default async function handler(req, res) {
    const {body} = req;
    try{
        if (req.method === 'POST') {
            const createOrder = await fetch('http://localhost:1337/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
            return res.status(200).json( body );
        }
        
    } catch(err) {
        res.status(500).json('erorr res!')
    }
    
}