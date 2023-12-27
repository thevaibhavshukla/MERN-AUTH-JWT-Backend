const express = require("express");
require("dotenv").config();
const app = express();
const path = require('path')
const cors = require('cors');



const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const mongodbConnection = require("./config/mongodbConnection");

const port =process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.get("/", (req, res) => res.send("Hello World!"));



app.listen(port, () => console.log(`Node JS Server Running On Port ${port}!`));