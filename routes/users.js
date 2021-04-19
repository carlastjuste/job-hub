
const router = require('express').Router();
let User = require('../models/user');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const newUser = new User({username, password, firstName, lastName});

  // newUser.save()
  //   .then(() => res.json('User added!'))
  //   .catch(err => res.status(400).json('Error: ' + err));

  newUser.save(function(err,result){
      if (err){
          console.log(err);
      }
      else{
          console.log(result)
      }})
  



});

module.exports = router;