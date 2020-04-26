const mongoose = require('mongoose')

const EmprestimoSchema = new mongoose.Schema(
	{
		thumbnail: String,
		name: String,
		debtReason: String,
		debtDate: Date,
		types: [String],
		price: Number,
		rateInterest: String,
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		toJSON: {
			virtuals: true,
		}
	},
	{
		timestamps: true,
	},
);

EmprestimoSchema.virtual('thumbnail_url').get(function () {
	return `http://localhost:4000/files/${this.thumbnail}`
})

module.exports = mongoose.model('Emprestimo', EmprestimoSchema)