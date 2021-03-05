// api/index.js
const cors = require("cors")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(require("./src/routes.js"))



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><
const port = 3001
app.listen(port,
console.log(`server listenning at port: ${port}`))
