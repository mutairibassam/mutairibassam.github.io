import { addUsers } from '../../Faunadb';

export default async function handler(req, res) {
    const { name, email, program } = req.body;

    if(req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed'});
    }
    try {
        const createdUser = await addUsers(name, email, program)
        console.log("createUser.js " + createdUser)
        return res.status(200).json(createdUser)

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.'})
    }
}