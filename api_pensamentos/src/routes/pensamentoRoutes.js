import { Router } from "express";
import { cadastrarPensamento, listarPensamentos } from "../controllers/pensamentoController.js";

const router = Router()

router.post("/", cadastrarPensamento)
router.get("/", listarPensamentos)

export default router;