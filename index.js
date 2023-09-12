const express = require('express');
const app = express();
const port = 5000;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('learnexpresssql', 'root', '', {
  host: 'localhost', // or the hostname of your MySQL server
  dialect: 'mysql',
});

const router = require('./routes/index');
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.json('berhasil respon API');
});



// app.post('/post', async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//   }
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//   });

app.listen(port, () => {
  console.log(`berjalan di port: ${port}`);
});
