import express, { json } from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());
app.use(helmet());

export default app;