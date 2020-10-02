const router = require("express").Router();
const appointmentRoutes = require("./appointments");

// Appointment routes
router.use("/appointments", appointmentRoutes);

module.exports = router;