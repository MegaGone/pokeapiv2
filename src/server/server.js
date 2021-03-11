import express from "express";
import routes from "./routes";
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 2021;

// Settings
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

// Middleware esto es para que el server tenga acceso a esto
app.use(express.static('dist'));

// Routes
app.use(routes);

// Bodyparser
app.use(bodyParser.json());

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
  console.log(path.join(__dirname + '/views'));
  console.log(`Server listen on http://localhost:${port}`);
});