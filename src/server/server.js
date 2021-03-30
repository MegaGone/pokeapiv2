import express from "express";
import routes from "./routes";
import cors from "cors";
import path from 'path';

const app = express();
const port = 2021;

// PUBLIC
app.use(express.static(path.resolve(__dirname, "../../public")))

app.use(cors());

// Routes
app.use(routes);

// Bodyparser
app.use(express.json());

// CORS

// Server
app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
