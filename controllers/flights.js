var Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function newFlight(req, res) {
    res.render('flights/new');
}

function index (req, res) {
  Flight.find({}, function (err, flights) {
  res.render('flights/index', { title: "All Flights", flights});
  })};

  function show (req, res) {
    Flight.findById(req.params.id, function(err, flights){
      res.render('flights/show')
    })
  }

function create (req, res){
  var flight = new Flight (req.body);
  flight.save(function(err){
    if (err) return res.redirect("/flights/new");
    res.redirect("/flights");
  })
  }

