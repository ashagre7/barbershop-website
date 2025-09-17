const express = require('express');
const router = express.Router();
const { getAllAppointments } = require('../Controllers/adminController');
const { verifyAdmin } = require('../Middleware/authMiddleware');

router.get('/appointments', verifyAdmin, getAllAppointments);

module.exports = router;
