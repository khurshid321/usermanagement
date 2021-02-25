const express = require("express");
const bodyParser = require("body-parser");

const user = require("./routes/user");
require("./database/db")
const app = express();

app.use(bodyParser.json())

app.use("/", user)

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});