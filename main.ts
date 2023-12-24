/** @format */

import { sequelize } from "./index";;
import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const handleListening = () => console.log(`Server Listening on port http://localhost:${PORT}`);
const seq = async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    console.log(`Connected Successfully! http://localhost:${PORT}`);
  } catch (error) {
    console.error(`Connected Fail! http://localhost:${PORT}`, error);
    res.json({ message: "Error" });
  }
}

app.get("/", seq);
app.listen(PORT, handleListening);

export default sequelize;