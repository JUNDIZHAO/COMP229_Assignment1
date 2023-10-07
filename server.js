const express = require("express");
const app = express();
const forRoutes = require("./routes/routes");

app.set('view engine', 'ejs');

//for using public folder
app.use("/public", express.static("public"));


//for routes - link to routes folder for routes
app.use("/", forRoutes);


app.listen(4000);
console.log('Server running at http://localhost:4000/');