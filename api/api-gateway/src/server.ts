import expressApp from "./expressApp";
import { config } from 'dotenv';

config();

const PORT = process.env.API_GATEWAY_PORT || 3000;

export const startServer = async () => {
	expressApp.listen(PORT, () => {
		console.log(`Api-gateway is running at http://localhost:${PORT}`);
	});

	process.on('unhandledRejection', (err) => {
		console.log(err);
		process.exit(1);
	});

	process.on('uncaughtException', (err) => {
		console.log(err);
		process.exit(1);
	});

	process.on('SIGINT', () => {
		console.log('Bye bye!');
		process.exit();
	});

	process.on('SIGTERM', () => {
		console.log('Bye bye!');
		process.exit();
	});


}

startServer().then(() => { }).catch((err) => { console.log(err) });