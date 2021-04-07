
const router = require('express').Router();
let Job = require('../models/job');

router.route('/').get((req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;