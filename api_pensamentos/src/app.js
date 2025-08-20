import express from "express"
import cors from "cors"
import { conn } from "./config/sequelize.js"

//Tabelas
import usuarioModel from "./models/usuarioModel.js"
import pensamentoModel from "./models/pensamentoModel.js"

//Rotas
import usuarioRoutes from "./routes/usuarioRoutes.js"
import pensamentoRoutes from "./routes/pensamentoRoutes.js"

const app = express()

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: "*",
    credentials: true
}))
app.use(express.json())

conn
    .sync()
    .then(() => console.log("Banco de dados conectado"))
    .catch((error) => console.log(error))

app.use("/api/usuarios", usuarioRoutes)
app.use("/api/pensamentos", pensamentoRoutes)

app.get("/", () => {
    console.log("Olá, Mundo")
})

export default app;