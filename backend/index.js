const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


mongoose.connect("mongodb+srv://Rupa:2003@november-cluster.gqrzjvz.mongodb.net/"
).then(() => app.listen(2500, () =>
   console.log("connected to the server + port")
)
)
   .catch(e => console.log(e));
