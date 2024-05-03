const mongoose=require('mongoose')
const Schema=mongoose.Schema

const priceSchema=new Schema({
    price:{
        type:Number
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Prices",priceSchema);