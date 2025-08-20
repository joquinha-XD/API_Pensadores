import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js"

const usuarioModel = conn.define(
    "usuarios",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        confirmar_senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "usuarios",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updates_at"
    }
)

export default usuarioModel;