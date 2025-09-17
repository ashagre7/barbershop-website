const Appointment = require('../models/Appointment');

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ date: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'שגיאה בשרת' });
  }
};

module.exports = { getAllAppointments };
