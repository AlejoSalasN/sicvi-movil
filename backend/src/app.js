const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const usersRouter = require("./routes/users.routes");
const eventosRouter = require("./routes/eventos.routes");
const informacionRouter = require("./routes/informacion.routes");

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));

const port = process.env.port || 3000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/uploads" }));

app.use("/api/user", usersRouter);
app.use("/api/evento", eventosRouter);
app.use("/api/informacion-educativa", informacionRouter);

app.get("/", (req, res) => {
  res.send("Backend SICVI");
});

app.listen(port, () => {
  console.log("Port ==> ", port);
});
