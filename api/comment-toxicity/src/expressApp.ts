import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { models } from './utils/models';
import { ServiceRoutes } from './utils/services_routes';
import axios from 'axios';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", async (req: Request, res: Response) => {
	res.send("Hello from comment-toxicity");
});


app.post("/:model/predict", async (req: Request, res: Response) => {
	try {
		const model = req.params.model;
		if (!model || model == "") {
			res.status(400).send("Model not provided");
			return;
		}

		if (models.includes(model) == false) {
			res.status(400).send("Model not found");
			return;
		}

		let version = req.body.version || 'v1';

		const BASEURL = `${ServiceRoutes.COMMENT_TOXICITY.URL}/ct/${model}/${version}/predict`;

		const response = await axios.post(BASEURL, req.body);

		console.log("COMMENT RESPONSE : ", response.data);

		res.send({ isSuccess: true, data: response.data });
	} catch (err) {
		res.status(500).send(`Internal server error ${err}`);
	}
});


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(500).send(`Internal server error ${err}`);
});


export default app;