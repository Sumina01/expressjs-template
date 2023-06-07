const express = require("express");
const dotenv = require("dotenv");
const app = express();
const logger = require("./middleware/logger");

const PORT = 2000;
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({ status: 200 });
});

app.listen(PORT, () => {
  console.log(`Running in ${process.env.NODE_ENV} on ${process.env.PORT}`);
});
