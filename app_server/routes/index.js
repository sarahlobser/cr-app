var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.index);
router.get('/xsshere', ctrlMain.xssplease);
router.get('/checkout', ctrlMain.exposeCookies);
router.get('/securecheckout', ctrlMain.exposeSignedCookies);
router.post('/xsshere', ctrlMain.xssplease);

module.exports = router;
