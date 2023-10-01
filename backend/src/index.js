const express = require("express");
const cors = require("cors");
const  mongoose = require('mongoose');
require("dotenv").config();
const medicineRouter = require('./routes/medicineRoute.js');
const dogRouter = require('./routes/dogRouter')
const rescuedDogRouter =require("./routes/rescuedDogRoute.js"); //import  rescuedDogRoute
const appointmentRouter = require("./routes/Appointment-routes.js");
const userRouter = require("./routes/User-routes");
const salesRouter = require("./routes/salesRoute.js")

let app = express();
app.disable("x-powered-by");

app.use(cors({ exposedHeaders: ['x-skip', 'x-limit', 'x-total'] }));
app.use(express.json());

app.use('/medicine', medicineRouter)
app.use('/dog' , dogRouter)
app.use("/createRescuedDog",rescuedDogRouter);
app.use("/appointment",appointmentRouter);
app.use("/user",userRouter);
app.use("/sales", salesRouter)

const initialize = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT_URL);
    console.log("Mongodb connection success!");
  } catch (e) {
    console.log(e);
  }
};

const startServer = async () => {
  await initialize();
  app.listen(process.env.PORT || 8000);
  console.log('Server started');
};

startServer();