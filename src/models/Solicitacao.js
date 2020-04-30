const mongoose = require('mongoose');

const SolicitacaoSchema = new mongoose.Schema({
    price: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    emprestimo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Emprestimo'
    }
})

module.exports = mongoose.model('Solicitacao', SolicitacaoSchema);