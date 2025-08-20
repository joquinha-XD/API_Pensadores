import { Sequelize } from "sequelize";

export const conn = new Sequelize("pensamentos3D", "root", "123456789", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})