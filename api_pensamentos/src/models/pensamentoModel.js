import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js"
import usuarioModel from "./usuarioModel.js";

const pensamentoModel = conn.define(
    "pensamentos",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            references: {
                model: usuarioModel,
                key: usuarioModel.id
            }
        }
    },
    {
        tableName: "pensamentos",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
)

export default pensamentoModel;

usuarioModel.hasMany(pensamentoModel, {foreignKey: "usuario_id"})
pensamentoModel.belongsTo(usuarioModel, {foreignKey: "usuario_id"})