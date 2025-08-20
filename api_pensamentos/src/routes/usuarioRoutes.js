import { Router } from "express";
import { cadastrarUsuario, loginUsuario } from "../controllers/usuarioController.js";

const router = Router()

router.post("/", cadastrarUsuario)
router.post("/login", loginUsuario)

export default router;