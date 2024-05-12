const express= require('express');
const connectDB =require ('./config/dbconnect');
const dotenv = require("dotenv");
const cors = require('cors');
const usersRoutes= require ('./routes/user');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}));


connectDB();
app.use('/users', usersRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server running on port : http://localhost:${PORT}`) );
