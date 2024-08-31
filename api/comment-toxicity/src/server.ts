import expressApp from "./expressApp";
import { config } from 'dotenv';

config();

const PORT = process.env.COMMENT_TOXICITY_PORT || 3001;

const startServer = async () => {
	expressApp.listen(PORT, () => {
		console.log(`Comment-toxicity-service is running at http://localhost:${PORT}`);
	});

	process.on('unhandledRejection', (err) => {
		console.error(err);
		process.exit(1);
	});

	process.on('uncaughtException', (err) => {
		console.error(err);
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

startServer().then(() => { }).catch((err) => { console.error(err) });
