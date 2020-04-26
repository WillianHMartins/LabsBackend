const mongoose = require('mongoose');

const SolicitacaoSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    divida: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Divida'
    }
})

module.exports = mongoose.model('Solicitacao', SolicitacaoSchema);