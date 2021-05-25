const mongoose = require('mongoose');

const Wallet = new mongoose.model(
    "Wallet",
    new mongoose.Schema({
        currency:"String",
        privateKey:"String",
        address:"String",
        owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})
)
module.exports = Wallet;