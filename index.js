const express = require("express");
const app = express();
const port = 5000;
const Sequelize = require("sequelize");
const sequelize = new Sequelize("learnexpresssql", "root", "", {
    host: "localhost", // or the hostname of your MySQL server
    dialect: "mysql",
});
app.use(express.json());

app.get("/", (req, res) => {
    res.json("berhasil respon API");
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database: ", error);
    });

app.listen(port, () => {
    console.log(`berjalan di port: ${port}`);
});
