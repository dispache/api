import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import { info, warning, error } from './config/logging';
import router from './routes/cashiersRouter';
import cors from 'cors';
const NAMESPACE = 'Server';
const app = express();

app.use(cors());

app.use((req, res, next) => {
	info(NAMESPACE, `METHOD : ${req.method}. URL : ${req.url}`);
	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use((req,res,next) => {
	warning(NAMESPACE, `METHOD : ${req.method}. URL : ${req.url}`, { message: 'Не найдено' });
	res.send('Не найдено');
})

app.use((err: any,req: any,res: any,next: any) => {
	error(NAMESPACE, `METHOD : ${req.method}. URL : ${req.url}`, { message: err.message });
})

app.listen(config.server.server_port, () => {
	console.log(`Started on : ${config.server.server_hostname}:${config.server.server_port}`);
})