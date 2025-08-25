const nodemailer = require("nodemailer");
require("dotenv").config();

const sendAppointmentEmail = async ({ name, phone, service, date }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const formattedDate = new Date(date).toLocaleString("he-IL", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Jerusalem",
  });

  const mailOptions = {
    from: `"Barbershop Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "תור חדש נקבע באתר",
    html: `
      <h2>תור חדש התקבל</h2>
      <p><strong>שם:</strong> ${name}</p>
      <p><strong>טלפון:</strong> ${phone}</p>
      <p><strong>שירות:</strong> ${service}</p>
      <p><strong>תאריך ושעה:</strong> ${formattedDate}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendAppointmentEmail;
