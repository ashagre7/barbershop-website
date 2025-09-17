const bcrypt = require('bcrypt');

async function run() {
  const password = 'admin1234'; // הסיסמה שאתה רוצה להצפין
  const hashed = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hashed);
}

run();
