var express = require('express');
var router = express.Router();

console.log('1');
/* GET home page. */
router.get('', function(req, res, next) {
  res.json({ title: 'Expresdss!!!!!!'});
});

module.exports = router;
