var express = require('express');
var router = express.Router();

var Series = require('../models/series');
var Movies = require("../models/movies");

/* GET home page. */
router.get('/', function(req, res, next) {

  Series.find({}, function(err, series){
    if (err){
      return err;
    }
    else{
      Movies.find({}, function(err, movies){
        if (err){
          return err;
        }
        else{
          res.render('index', {
            series: series,
            movies: movies
          })
        }
      }).sort({
        title: 1
      })
    }
  }).sort({
    title: 1
  })

});

router.post('/add_new_series', function(req, res, next){

  var series = new Series();
  series.title = req.body.title;
  series.season = req.body.season;
  series.episode = req.body.episode;

  series.save(function(err){
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/');
    }
  })
  
});

router.get("/series_data/:id", function(req, res, next){

  Series.findById(req.params.id, function(err, series){
    if (err){
      return err;
    }
    else{
      res.send(series);
    }
  })

});

router.get("/next_data/:id", function(req, res, next){

  Series.findById(req.params.id, function(err, series){
    if (err){
      return err;
    }
    else{
      res.send(series);
    }
  })

})

router.post('/update_series', function(req, res, next){

  var series = {};
  series.title = req.body.title_edit;
  series.season = req.body.season_edit;
  series.episode = req.body.episode_edit;

  var query = {_id: req.body.id_edit}

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

  var series = {};
  series.title = req.body.title_next;
  series.season = req.body.season_next;
  series.episode = req.body.episode_next;

  var query = {_id: req.body.id_next}

  Series.update(query, series, function(err){
    if (err){
      console.log(err)
    }
    else{
      res.redirect('/');
    }
  })

});

// ************************* MOVIES *************************
// *********** ADD NEW MOVIE ***********
router.post('/add_new_movie', function(req, res, next){

  var movie = new Movies();
  movie.title = req.body.title;

  movie.save(function(err){
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/');
    }
  })
})

// *********** EDIT A MOVIE ***********
router.post("/edit-movie", function(req, res, next){

  var query = {_id: req.body.movie_id};
  var movie = {};

  movie.title = req.body.title;

  Movies.update(query, movie, function(err){
    if (err){
      console.log(err);
    }
    else{
      res.redirect('/');
    }
  })

})

router.get("/get-movie/:id", function(req, res, next){

  Movies.findById(req.params.id, function(err, movie){
    if (err){
      console.log(err)
    }
    else{
      res.send(movie);
      console.log("Sent")
    }
  })

})


// *********** DELETE A MOVIE ***********
router.delete('/delete-movie/:id', function(req, res, next){
  var query = {_id: req.params.id};

  Movies.findById(req.params.id, function(err, movie){
    if (err){
      console.log(err);
    }
    else{
      Movies.remove(query, function(err){
        if (err){
          console.log(err);
        }
        res.send("Successfully Deleted");
      })
    }
  })

})

// *********** DELETE A SERIES ***********
router.delete('/delete-series/:id', function(req, res, next){
  var query = {_id: req.params.id};

  Series.findById(req.params.id, function(err, series){
    if (err){
      console.log(err);
    }
    else{
      Series.remove(query, function(err){
        if (err){
          console.log(err);
        }
        res.send("Successfully Deleted");
      })
    }
  })

})

module.exports = router;
