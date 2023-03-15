const express = require("express")
const mongoose = require("mongoose");
const userRoutes = require("../Routes/userRoute")

const app = express();
app.use(express.json());

app.use("/", userRoutes)

mongoose.connect('mongodb+srv://sanjay:sanjay@cluster0.p0uxhax.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,//make this also true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(" database Connected successfully");
});

app.listen(4000, ()=>{
    console.log("server is listening at 4000")
})