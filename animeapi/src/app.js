import express from "express";
import testRoutes from "./routes/testRoutes.js";
import animeRoutes from "./routes/animeRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(testRoutes);
app.use(animeRoutes);

export default app;
