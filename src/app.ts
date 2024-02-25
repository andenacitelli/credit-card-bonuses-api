import "express-async-errors";

import express, { json } from "express";
import helmet from "helmet";
import { router } from "./routes/root";

const app = express();
app.use(json());
app.use(helmet());

app.use(router);

app.use((_, response, _2) => {
  response.status(404).json({ error: "NOT FOUND" });
});

export { app };
