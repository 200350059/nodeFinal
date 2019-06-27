const router = require('express').Router();

const ActsController = require('../controllers/actsController');

// Begin routes

router.get('/', ActsController.index);
router.get('/pendings', ActsController.pendings);
router.get('/accomplished', ActsController.accomplished);
router.get('/new', ActsController.new);
router.get('/:id', ActsController.show);
router.get('/:id/edit', ActsController.edit);
router.post('/', ActsController.create);
router.post('/update', ActsController.update);
router.post('/destroy', ActsController.destroy);

// End routes

module.exports = router;