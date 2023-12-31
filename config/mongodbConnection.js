const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("error", (error) => {
  console.log(error);
});

connection.on("connected", () => {
  console.log("Mongo DB connection successfull");
});