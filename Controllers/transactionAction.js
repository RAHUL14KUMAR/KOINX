const axios=require('axios')
const Transactions=require('../Schema/TransactionSchema')
const Prices=require('../Schema/PriceSchema')

const getLIstOfTheTrnasactionOfUser=async(req,res)=>{
    try{
        const address=req.params.transactionId
        const apiKey=process.env.API_KEY

        const apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&tag=latest&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);

        await Transactions.deleteMany({ $or: [{from:address },{to:address}] })

        await Transactions.insertMany(response.data.result);

        res.status(200).json(response.data.result);

    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

const fetchPrice=async(req,res)=>{
    try{
        
        const a=await Prices.findOne()
        const resp=await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
        if(!a){
            await Prices.updateOne({}, {
                $set: {
                  price: resp.data.ethereum.inr
                }
            },{ upsert: true });
            res.status(200).json(resp.data.ethereum.inr);
        }else{
            res.status(200).json(a.price);
        }

    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

const UpdatingPrice=async()=>{
    try{
        const resp=await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
        
        const a=await Prices.updateOne({}, {
            $set: {
              price: resp.data.ethereum.inr
            }
        },{ upsert: true });
        return a;
    }catch(error){
        console.log(error);
    }
}

setInterval(UpdatingPrice,10*60*1000)


module.exports={
    getLIstOfTheTrnasactionOfUser,
    fetchPrice
}