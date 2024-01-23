import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();

// app.use(cors());

app.get("/api/v1", (req, res) => {
  res.send("this is home page");
});

app.get("/api/v1/name", (req, res) => {
  res.send("hello my name is sumit");
});

export default app;
