const express = require('express');
const { check } = require('express-validator');
const TimestampController = require('../controllers/timestampController');

const router = express.Router();

// GET /api/
router.get('/', TimestampController.getCurrentTimestamp);

// GET /api/:date
router.get('/:date', [
  check('date').notEmpty()
], TimestampController.getTimestamp);

module.exports = router; 