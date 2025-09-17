const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const nodemailer = require('nodemailer');

// יצירת תור חדש
router.post('/', async (req, res) => {
  try {
    const { userId, name, phone, service, date } = req.body;

    if (!userId || !name || !phone || !service || !date) {
      return res.status(400).json({ message: 'נא למלא את כל השדות' });
    }

    const newAppointment = new Appointment({
      userId,
      name,
      phone,
      service,
      date,
    });

    await newAppointment.save();

    // שליחת מייל לאדמין
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ashagrenegash987@gmail.com',
        pass: 'qknl lkam lqrm yuwv',

      },
    });

    const mailOptions = {
      from:  'ashagrenegash987@gmail.com',
      to: 'ashagrenegash987@gmail.com',
      subject: 'הוזמן תור חדש במספרה',
      html: `
        <h3>פרטי התור:</h3>
        <p><strong>שם:</strong> ${name}</p>
        <p><strong>טלפון:</strong> ${phone}</p>
        <p><strong>שירות:</strong> ${service}</p>
        <p><strong>תאריך:</strong> ${new Date(date).toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'התור נשמר ונשלח בהצלחה!' });
  } catch (error) {
    console.error('שגיאה:', error);
    res.status(500).json({ message: 'שגיאה בשמירת התור או בשליחת מייל' });
  }
});

module.exports = router;
