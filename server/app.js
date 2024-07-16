import express from "express";
import dotenv from "dotenv";
import database from "./database.js";

import AdminRoutes from "./routes/AdminRoutes.js";

dotenv.config();
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
database();

app.use("/api/auth", AdminRoutes);

app.listen(process.env.PORT, () => {
    console.log(`sunucu calısıyor portu:${process.env.PORT}`);
});
