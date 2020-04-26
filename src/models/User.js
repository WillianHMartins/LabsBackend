const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true,
        },
        bio: String,
        company: String,
        location: String,
        admin: Boolean,
        avatar: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', UserSchema);