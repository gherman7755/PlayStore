const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth");
const gameRoute = require("./routes/game");
const appRoute = require("./routes/application");
const cors = require('cors');

app.use(cors());


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnectuion Success"))
    .catch((err)=>{console.log(err)});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/games", gameRoute);
app.use("/api/apps", appRoute);


    
app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server")
});

