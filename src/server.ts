import * as express from 'express';
import indexRoutes from './routes/index';
import clientRoutes from './routes/client';
import "reflect-metadata";

const app = express();

const PORT = 8000;
const SERVER_PATH = '/client-manager'

app.use(SERVER_PATH, indexRoutes);
app.use(SERVER_PATH, clientRoutes);
// app.use(productRoutes);

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})
