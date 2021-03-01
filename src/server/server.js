import express from 'express';
import routes from './routes';

const app = express();
const port = 2021;

// Middleware

// Routes
app.use(routes)

// CORS

// Server
app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`);
});