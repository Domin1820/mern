const express = require('express');
const City= require('../model/cityModel');

const router = express.Router();

router.get('/test', (req, res) => {
    res.send({ msg: 'I love pizza' })

})
/*get all cities*/
router.get("/all", (req, res) => {
    City.find({}, (err, data) => {
      if (err)
        res.send(err);
      res.send(data);
    })
  })

router.post("/all", (req, res) => {
  const newCity = new City({
    name: req.body.name,
    country: req.body.country,
    image: req.body.image,

  });
  newCity.save().then(item => res.json(item))
})







module.exports = router
