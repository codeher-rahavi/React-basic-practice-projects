const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rahavi-ganeshan:rahaviganeshan2025@cluster0.4mxrp1p.mongodb.net/')
.then(()=>console.log("mongoDB connected Sucessfully"))
.catch((error) => console.log(`Error occured : ${error}`));