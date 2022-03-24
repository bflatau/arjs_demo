const express = require('express')
const https = require('https');
const app = express();
const fs = require('fs');

app.use(express.static(__dirname + "/public"));

// app.get('/', (req, res) => {
//   res.send('Hello HTTPS!')
// })


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`, (err) => {
      if (err) {
        console.log(err);
        res.end(err.message);
      }
    });
  });

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(3000, () => {
    console.log('Listening...')
  })