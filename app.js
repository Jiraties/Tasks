const express = require("express");
const path = require("path");

const app = express();

const userRoutes = require("./routes/UserRoutes");
const apiRoutes = require("./routes/ApiRoutes");

app.set("view engine", "ejs");
app.set("views", "views");

// body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRoutes);
app.use(userRoutes);

app.listen(3000);
