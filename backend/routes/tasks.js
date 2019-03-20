var express = require('express');
var router = express.Router();
var service = require('../services/tasks.services');

/* GET tasks listing. */
router.get('/', service.getAll);
router.get('/:id', service.get);

/* POST task */
router.post('/', service.create);

/* PUT task */
router.put('/:id', service.edit);

/* DELETE task */
router.delete('/:id', service.delete);

module.exports = router;
