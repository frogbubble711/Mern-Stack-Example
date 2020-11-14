const express = require('express');
const moviesRoutes = express.Router();



let Movies = require('../models/movies.model');


moviesRoutes.route('/add').post(function (req, res) {
    let movies = new Movies(req.body);
    movies.save()
        .then(movies => {
            res.status(200).json({'Movies': 'movie in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


moviesRoutes.route('/').get(function (req, res) {
    Movies.find(function(err, moviess){
        if(err){
            console.log(err);
        }
        else {
            res.json(moviess);
        }
    });
});

moviesRoutes.route('/delete/:id').get(function (req, res) {
    Movies.findByIdAndRemove({_id: req.params.id}, function(err, movies){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
module.exports = moviesRoutes;
