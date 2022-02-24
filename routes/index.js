var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* router.get('/', (req, res) => {
  res.send("hihi")
}); */

router.get('/login', (req, res) => {
  res.render('login')
});

app.listen(8000, () => {
  console.log('8000 is running')
})

module.exports = router;
