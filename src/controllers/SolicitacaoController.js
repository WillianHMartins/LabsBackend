const Solicitacao = require('../models/Solicitacao')

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { solicitacao_id} = req.params;
        const { date } = req.body;

        const solicitacao = await Solicitacao.create({
            user: user_id,
            solicitacao: solicitacao_id,
            date,
        })

        await solicitacao.populate('solicitacao').populate('user').execPopulate();

        return res.json(solicitacao);
    }

}
