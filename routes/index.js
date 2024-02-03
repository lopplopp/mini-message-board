var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'mini message board', messages: messages});
});

router.post('/', function(req, res, next){
  res.redirect('/new')
})

router.get('/new', function(req, res, next){
  res.render('new')
})

router.post('/new', function(req, res, next){
  console.log(req.body.name)
  const user = req.body.name;
  const text = req.body.text;

  messages.push({text: text, user: user, added: new Date()})
  res.redirect('/')

})

module.exports = router;
