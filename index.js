require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//1- Express look if request match any of these routes
// require('./server/routes/gamesRoutes')(app);
// require('./server/routes/playersRoutes')(app);
// require('./server/routes/standingsRoutes')(app);
require('./server/routes/baseRoute')(app);

if (process.env.NODE_ENV === 'production') {
  // Express  will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build')); //Finally - Express look if the request is for an asset
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
