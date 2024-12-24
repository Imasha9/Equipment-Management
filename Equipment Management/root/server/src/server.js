const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();
dotenv.config();

const PORT=process.env.PORT || 4000;

// Set a higher limit, e.g., 10MB


app.use(cors());
app.use(bodyParser.json());
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

// Import routes
const equipmentRouter = require('./routs/Equipmentmanagement_equipmentRt.js');
const damageEquipmentRouter = require('./routs/EquipmentManagement_damageEquipmentRt.js');
const technicianEmailRouter = require('./routs/EquipmentManagement_technicianEmailRt.js');
const equipmentReservationRouter = require('./routs/EquipmentManagement_equipmentReservationRt.js');
console.log('equipmentRt.js is being imported');
// Use routes
app.use('/equipment', equipmentRouter);
app.use('/damageEquipment', damageEquipmentRouter);
app.use('/technicianEmail', technicianEmailRouter);
app.use('/equipmentReservation', equipmentReservationRouter);
connection.once("open", () => {
  console.log("MongoDB database connected successfully!");
});

//routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
