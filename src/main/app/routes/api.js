const express = require('express');
const router = express.Router();
const apiAuthCheck = require('../middlewares/apiAuthCheck');
const WalletController = require('../controllers/wallet');
const TransctionController = require('../controllers/transaction');



/** insert api authentication middleware */
router.use(apiAuthCheck);

router.post('/wallets', WalletController.create);
router.get('/wallets', WalletController.all);
router.get('/wallets/:id', WalletController.getById);
router.delete('/wallets/:id', WalletController.delete);

router.post('/wallets/:id/debit/init', TransctionController.initDebit);
router.post('/wallets/:id/credit', TransctionController.credit);
router.delete('/wallets/:id/transaction/:txnid/release', TransctionController.release);
router.patch('/wallets/:id/transaction/:txnid/complete', TransctionController.complete);

module.exports = router;