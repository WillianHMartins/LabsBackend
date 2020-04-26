const Emprestimo = require('../models/Emprestimo')

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const emprestimos = await Emprestimo.find({ user: user_id });

        return res.json(emprestimos);
    }
}