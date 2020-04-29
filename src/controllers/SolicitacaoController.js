const Solicitacao = require('../models/Solicitacao')

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { emprestimo_id} = req.params;
        const { date } = req.body;

        const solicitacao = await Solicitacao.create({
            user: user_id,
            emprestimo: emprestimo_id,
            date,
        })

        await solicitacao.populate('emprestimo').populate('user').execPopulate();

        const ownerSocket = req.connectedUsers[solicitacao.emprestimo.user]

        if (ownerSocket) {
            req.io.to(ownerSocket).emit('solicitacao_request', solicitacao)
        }

        return res.json(solicitacao);
    }

}
