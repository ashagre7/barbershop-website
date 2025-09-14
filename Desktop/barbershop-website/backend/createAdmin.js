const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const email = 'admin@example.com';
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      console.log('אדמין כבר קיים');
      mongoose.disconnect();
      return;
    }

    const hashedPassword = await bcrypt.hash('admin1234', 10);
    const adminUser = new User({
      name: 'Admin',
      email,
      password: hashedPassword,
      isAdmin: true
    });

    await adminUser.save();
    console.log('אדמין נוצר בהצלחה');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('שגיאה בחיבור ל-DB:', err);
  });
