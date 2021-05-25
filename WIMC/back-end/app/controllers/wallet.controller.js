const db = require('../models');
const cw = require('crypto-wallets');
const { wallet } = require('../models');
const Wallet = db.wallet;
createWallet=(req,res)=>{
    const cryptoWallet = cw.generateWallet(req.body.currency);
    const privateKey = cryptoWallet.privateKey;
    const Address = cryptoWallet.address;

    const wallet = new Wallet({
        currency:req.body.currency,
        privateKey:privateKey,
        address:Address,
        owner:req.body.userId
    })
    wallet.save((err,result)=>{
        if(err){
            res.status(500).send({message:err})
        }
        res.status(200).send({message:"Your wallet added successfuly!"})
    })
}

const getWallet=(req,res)=>{

    Wallet.find({owner:req.body.userId}).lean().exec((err,WalletData)=>{
        if(err){
            res.status(500).send({message:err})
        }
        res.status(200).send(WalletData);
    })
}
module.exports={
    createWallet,
    getWallet
}