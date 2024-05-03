const express=require('express');
const { fetchPrice } = require('../Controllers/transactionAction');
const router=express.Router();

router.route('/fetch')
.get(fetchPrice)

module.exports=router