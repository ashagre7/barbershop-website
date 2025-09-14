const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ התחברות ל־MongoDB הצליחה'))
  .catch((err) => console.error('❌ שגיאה בחיבור ל־MongoDB:', err));

app.use('/api/appointments', require('./Routes/appointmentsRoutes'));
app.use('/api/admin', require('./Routes/adminRoutes')); // 👈 חשוב להוסיף
app.use('/api/auth', require('./Routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
