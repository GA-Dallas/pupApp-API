const Puppy = require('../models/puppy');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
};


function deleteOne(req, res) {
    Puppy.findByIdAndDelete(req.params.id, function(err, puppy) {
        return index(req, res);
    });
}


function update(req, res) {
    Puppy.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }, function(err, puppy) {
            res.json({ puppy });
    });
}


function show(req, res) {
    Puppy.findById(req.params.id, function(err, puppy) {
        res.json({ puppy });
    });
}


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
