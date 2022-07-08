import express from "express";
import path from "path";

import userRoutes from "./routes/UserRoutes";
import apiRoutes from "./routes/ApiRoutes";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRoutes);
app.use(userRoutes);

app.listen(3000);
