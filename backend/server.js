require("dotenv").config();
const app = require("./middleware/app");
const Db = require("./db/db");
Db();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server ishga tushdi"));
