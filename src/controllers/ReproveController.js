const Solicitacao = require('../models/Solicitacao');

module.exports = {
	async store(req, res) {
		const { solicitacao_id } = req.params;

		const solicitacao = await Solicitacao.findById(solicitacao_id).populate('emprestimo')

		solicitacao.approved = false;

		await solicitacao.save()

		const solicitacaoUserSocket = req.connectedUsers[solicitacao.user]

		if (solicitacaoUserSocket) {
			req.io.to(solicitacaoUserSocket).emit('solicitacao_response', solicitacao)
		}

		return res.json(solicitacao)
	},
};