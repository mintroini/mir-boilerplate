var express = require('express');
var router = express.Router();

console.log('1');
/* GET home page. */
router.get('', function(req, res, next) {
  debugger;
  console.log('2');
  console.log('4');
  res.json({ title: 'Expresdss!!!!!!'});
});

module.exports = router;
