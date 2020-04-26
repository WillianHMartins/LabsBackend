const axios = require('axios')
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`);

        let user = await User.findOne({
            user: username
        })

        const {
            name,
            bio,
            company,
            location,
            avatar_url: avatar
        } = response.data;


        if (!user) {
            user = await User.create({
                name,
                user: username,
                bio,
                company,
                location,
                avatar
            })
        }

        return res.json(user);
    }
}