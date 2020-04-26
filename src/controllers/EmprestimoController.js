const User = require('../models/User')
const Emprestimo = require('../models/Emprestimo')

module.exports = {

    async index(req, res) {
        const { type } = req.query;

        const emprestimos = await Emprestimo.find({ types: type })
        
        return res.json(emprestimos);
    },
    
    async store(req, res) {
        const { filename } = req.file;
        const { name, debtReason, debtDate, rateInterest, types, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({
                error: 'Usuário não foi cadastrado'
            })
        }

        const emprestimo = await Emprestimo.create({
            user: user_id,
            thumbnail: filename,
            name,
            debtReason,
            debtDate,
            rateInterest,
            types: types.split(',').map(type => type.trim()),
            price
        })

        return res.json(emprestimo)
    }
}