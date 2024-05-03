const axios=require('axios')
const Transactions=require('../Schema/TransactionSchema')

const getBalanceFromAccount=async(id)=>{
    try{
        const address=id;

        const Transaction=await Transactions.find({from:address});
        const balance=await Transaction.reduce((acc,curr)=>{
            if(address.toLowerCase()===curr.from.toLowerCase()){
                acc-=parseInt(curr.value)
            }
            return acc;
        },0)

        return balance;

    }catch(error){
        console.log(error);
    }
}

const getBalanceToAccount=async(id)=>{
    try{
        const address=id;

        const Transaction=await Transactions.find({to:address});
        const balance=await Transaction.reduce((acc,curr)=>{
            if(address.toLowerCase()===curr.to.toLowerCase()){
                acc+=parseInt(curr.value)
            }
            return acc;
        },0)

        return balance;

    }catch(error){
        console.log(error);
    }
}

const getBalance=async(req,res)=>{
    try{
        const balance1=await getBalanceFromAccount(req.params.transactionId);
        const balance2=await getBalanceToAccount(req.params.transactionId);
        res.status(200).json(balance1+balance2);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports={
    getBalance
}