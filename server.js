const express = require('express');

const useMainRouter = require('./routes/main');
const useUserRouter = require('./routes/user.js');

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', useMainRouter);
app.use('/user', useUserRouter);

app.listen(3000, () => {
  // We will connect to our dB here
  console.log('server started and listening on port 3000');
});
