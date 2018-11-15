const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

require('./routes/routes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(require('path').resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
