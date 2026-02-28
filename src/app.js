const express = require("express");

const app = express();
const PORT = 3000;

// Endpoint básico
app.get("/", (req, res) => {
  res.send("Microservicio NextGen funcionando 🚀");
});

// Endpoint health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});