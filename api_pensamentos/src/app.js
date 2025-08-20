import express from "express"
import cors from "cors"
import { conn } from "./config/sequelize.js"

//Tabelas
import usuarioModel from "./models/usuarioModel.js"

//Rotas
import usuarioRoutes from "./routes/usuarioRoutes.js"

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

app.get("/", () => {
    console.log("Olá, Mundo")
})

export default app;