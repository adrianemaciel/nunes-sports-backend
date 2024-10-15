require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

app.use(
  cors({
    origin: [
      "https://nunes-sports-store.netlify.app",
      "https://nunes-sports-kappa.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", productRoutes);

app.get("/", (req, res) => {
  return res.json({
    status: "OK",
    message: "Conexão ao backend bem-sucedida!",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na endereço http://localhost:${port}`);
});
