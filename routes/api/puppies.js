const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/puppies');

// GET /api/puppies -> all the puppies
router.get('/', puppiesCtrl.index);
 // POST /api/puppies -> create a new puppy
router.post('/', puppiesCtrl.create);
// GET /api/puppies/:id -> show a puppy
router.get('/:id', puppiesCtrl.show)
// PUT /api/puppies/:id -> update a puppy by id
router.put('/:id', puppiesCtrl.update);
// DELETE /api/puppies/:id -> delete a puppy by id
router.delete('/:id', puppiesCtrl.delete);


module.exports = router;