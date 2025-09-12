import express from "express";
const app = express();
const PORT = 3000;

app.get("/api", (_, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
