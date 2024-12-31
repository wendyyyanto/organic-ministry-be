import express from "express";
import "dotenv/config";
import { cors } from "./src/middlewares/CorsMiddleware";

const server = express();
const port = process.env.PORT || 5000;

server.use(cors);

server.listen(port, () => {
	console.log(`Server is running on localhost:${port}`);
});
