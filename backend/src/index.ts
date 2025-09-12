import express from "express";
import { getAllPowers } from "./db/read";
const app = express();
const PORT = 3000;

app.get("/api", (_, res) => {
  res.json(getAllPowers());
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
