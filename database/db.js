const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/usrManagement";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Connection is successfully established"))
    .catch(() => console.log("Connection can't established"))