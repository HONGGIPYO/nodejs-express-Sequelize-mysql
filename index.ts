import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_NAME ?? '';
const dbUser = process.env.DB_USER ?? '';
const dbPassword = process.env.DB_PASSWORD ?? '';

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      socketPath: `/cloudsql/${process.env.DB_CONNECTION_NAME}`,
    },
});