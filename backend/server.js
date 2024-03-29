const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.MDB_CONNECT, () => console.log("database connected succefully! "));


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000,()=> console.log("Server running on port 4000"));