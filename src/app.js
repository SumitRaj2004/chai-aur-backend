import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("hello this is a response from server");
});

export default app;
