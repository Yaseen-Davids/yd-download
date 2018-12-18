var express = require('express');
var router = express.Router();

var Series = require('../models/series');

// GET DATE
function getDate(){
  var date = new Date(),
  day = date.getDate(),
  month = date.getMonth(),
  year = date.getFullYear();

  var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var theMonth = monthsOfYear[month];

  return fullDate =  day + " " + theMonth + " " + year;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  
  Series.find({}, function(err, series){
    if (err){
      console.log(err)
    }
    else{
      res.render('index', {
        series: series
      })
    }
    
    }).sort({'title': 1})

});

router.post('/add_new', function(req, res, next){

  getDate();

  var series = new Series();
  series.title = req.body.title;
  series.season = req.body.season;
  series.episode = req.body.episode;
  series.dateUpdated = fullDate;

  series.save(function(err){
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/');
    }
  })
  
})

router.post('/update_series', function(req, res, next){

  getDate();

  var series = {};
  series.title = req.body.title_edit;
  series.season = req.body.season_edit;
  series.episode = req.body.episode_edit;
  series.dateUpdated = fullDate;

  var query = {title: req.body.title}

  Series.update(query, series, function(err){
    if (err){
      console.log(err)
    }
    else{
      res.redirect('/');
    }
  })

})

router.post('/next_episode', function(req, res, next){

  getDate();

  var series = {};
  series.title = req.body.title_next;
  series.season = req.body.season_next;
  series.episode = req.body.episode_next;
  series.dateUpdated = fullDate;

  var query = {title: req.body.title_next}

  Series.update(query, series, function(err){
    if (err){
      console.log(err)
    }
    else{
      res.redirect('/');
    }
  })

})

module.exports = router;
