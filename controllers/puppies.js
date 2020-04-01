const Puppy = require('../models/puppy');

module.exports = {
    index,
    create
};


function create(req, res) {
    Puppy.create(req.body, function(err, puppy) {
        res.json({ puppy });
    });
}


function index(req, res) {
    Puppy.find({}, function(err, puppies) {
        res.json({ puppies });
    });
}
