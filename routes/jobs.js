
const router = require('express').Router();
let Job = require('../models/job');

router.route('/').get((req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const jobtitle = req.body.jobtitle;
  const compagny = req.body.compagny;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const link = req.body.link;
  const status = req.body.status;
  const note = req.body.note;
  //const duration = Number(req.body.duration);
  //const date = Date.parse(req.body.date);

  const newJob = new Job({
    jobtitle,
    compagny,
    city,
    state,
    country,
    link,
    status,
    note,

  });

  newJob.save()
  .then(() => res.json('Job added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;