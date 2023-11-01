const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const usersRouter = require("./routes/users.routes");

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));

const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Backend con nodeJS - Express");
});

app.listen(port, () => {
  console.log("Port ==> ", port);
});
