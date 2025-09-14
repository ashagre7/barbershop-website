const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  const { userId, service, date } = req.body;

  if (!userId || !service || !date) {
    return res.status(400).json({ message: 'נא למלא את כל השדות' });
  }

  try {
    const appointment = new Appointment({ userId, service, date });
    await appointment.save();
    res.status(201).json({ message: 'התור נשמר בהצלחה' });
  } catch (error) {
    res.status(500).json({ message: 'שגיאה ביצירת התור', error: error.message });
  }
};
