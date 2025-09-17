const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'הזמנה נשמרה בהצלחה' });
  } catch (err) {
    res.status(500).json({ message: 'שגיאה בשמירת ההזמנה', error: err.message });
  }
};
