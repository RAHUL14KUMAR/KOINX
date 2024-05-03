const mongoose=require('mongoose')
const Schema=mongoose.Schema

const transactionSchema=new Schema({
    blockNumber: {
        type:String
    },
    timeStamp: {
        type:String
    },
    hash: {
        type:String
    },
    nonce: {
        type:String
    },
    blockHash: {
        type:String
    },
    transactionIndex: {
        type:String
    },
    from: {
        type:String
    },
    to: {
        type:String
    },
    value: {
        type:String
    },
    gas: {
        type:String
    },
    gasPrice: {
        type:String
    },
    isError: {
        type:String
    },
    txreceipt_status: {
        type:String
    },
    input: {
        type:String
    },
    contractAddress: {
        type:String
    },
    cumulativeGasUsed: {
        type:String
    },
    gasUsed: {
        type:String
    },
    confirmations: {
        type:String
    },
    methodId: {
        type:String
    },
    functionName: {
        type:String
    },
})

module.exports=mongoose.model("Transactions",transactionSchema);