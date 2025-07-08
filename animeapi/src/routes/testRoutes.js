import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("API de Personagens de Animes");
});

router.get("/helloword", (req, res) => {
  res.send("<h1>Olá, Mundo!</h1>");
});

export default router;
