const express=require('express');
const { getLIstOfTheTrnasactionOfUser } = require('../Controllers/transactionAction');
const { getBalance } = require('../Controllers/Balance');
const router=express.Router();

router.get('/:transactionId',getLIstOfTheTrnasactionOfUser);
router.get('/:transactionId/balance',getBalance);

module.exports=router