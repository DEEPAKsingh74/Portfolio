import axios from 'axios';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { COMMENT_TOXICITY } from './utils/services_config/config';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors configuration
app.use(cors({
	origin: 'http://localhost:8000', // Use the full URL scheme (http:// or https://)
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true, // Allow credentials (cookies, authorization headers)
	preflightContinue: false,
}));


//5 ---------------------     DYNAMIC ROUTING    --------------------

app.use(COMMENT_TOXICITY.ROUTE, async (req: Request, res: Response, next: NextFunction) => {
	try {
		console.log("--------------------- COMMENT-TOXICITY-SERVICE -----------------");

		const response = await axios({
			method: req.method,
			url: COMMENT_TOXICITY.URL + req.url,
			data: req.body,
			headers: {
				...req.headers,
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(JSON.stringify(req.body)).toString()
			}
		});

		res.status(response.status).json(response.data);
	} catch (error) {
		console.error('Error in comment toxicity:', error);
		next(error);
	}
});



app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(500).send(`Internal server error ${err}`);
});


export default app;