// como criar o modelo

const mongoose = require('mongoose');

const numbersSchema = new mongoose.Schema({
    name: String,
    contact: String
}, {
    timestamps: true
    // createAt:
    // updateAt:
});


module.exports = mongoose.model('Numbers', numbersSchema);