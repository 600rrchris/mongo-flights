var Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function newFlight(req, res) {
    res.render('flights/new');
}

function index (req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {title: 'All flights', flights});
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: "flight detail", flight});
  });
}

function create (req, res){
    req.body.newDisplaying = !!req.body.nowDisplaying;
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
  var flight = new Flight(req.body);
  flight.save(function(err){
    if (err) return res.render('flights/new');
    console.log(flight);
  });
    res.redirect('/flights/new')
};

