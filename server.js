//importing the express
const express = require("express");

//bundling the express module with the app variable
const app = express();

//getting request from browser and sending response to broswer


//listing or tuning this server on port
app.listen(3007, () => {
    console.log(" Express Server started on port 3007")
});

app.get("/ram", (req, res) => {
    res.send("Ram ram ji")
})