import express from "express";
import Log from "./logging-middleware/loggingMiddleware.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  Log("backend", "info", "middleware", `Request received: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  Log("backend", "info", "route", "Home route accessed");
  res.send("Backend running successfully");
});
app.post("/data", (req, res) => {

  Log("backend", "info", "route", "POST /data route accessed");

  const receivedData = req.body;

  Log(
    "backend",
    "info",
    "route",
    `Data received: ${JSON.stringify(receivedData)}`
  );

  res.send("Data received successfully");

});
app.get("/status", (req, res) => {
    Log("backend", "info", "route", "Status route accessed");
    res.send("Server is healthy");
});

app.post("/submit", (req, res) => {
    Log("backend", "info", "route", "Submit route accessed");
    res.send("Data submitted successfully");
});
app.use((err, req, res, next) => {
    Log("backend", "error", "middleware", `Error occurred: ${err.message}`);
    res.status(500).send("Something went wrong!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
  Log("backend", "info", "service", "Server started on port 3000");
});
