import express from "express";
import routes from "./routes";
import path from 'path';

const app = express();
const port = 2021;

// Middleware
app.use(express.static('dist'));
app.set('views', path.join(__dirname + '/views'))

// Routes
app.use(routes);

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Server
app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
