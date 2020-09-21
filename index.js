const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT || 4000

//Middleware
app.use(bodyParser.json());

//routes
app.use(require("./routes"));

app.get('/', (req, res) => res.send('default route'))


app.listen(port, () => {
  console.log('app is listening on:', port)
})