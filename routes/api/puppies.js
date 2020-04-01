const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/puppies');

// GET /api/puppies -> all the puppies
 router.get('/', puppiesCtrl.index);
 // POST /api/puppies -> create a new puppy
router.post('/', puppiesCtrl.create);


module.exports = router;