import { Router } from "express";
import { base } from "../databases/base.js";

const router = Router();

router.get("/personagem", (req, res) => {
  const { nome } = req.query;

  if (!nome) {
    return res.status(400).json({ error: "Nome do personagem é obrigatório" });
  }
  const nomeLower = nome.toLowerCase();
  const personagem = base.find((p) =>
    p.nome.toLowerCase().includes(nomeLower)
  );
  if (!personagem) {
    return res.status(404).json({ error: "Personagem não encontrado" });
  }
  res.json(personagem);
});

export default router;
