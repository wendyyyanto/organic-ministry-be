import "module-alias/register";

import express from "express";
import "dotenv/config";

import { cors } from "@middlewares/CorsMiddleware";
import bodyParser from "body-parser";
import TestimonialRoute from "@routes/TestimonialRoute";

const server = express();
const port = process.env.PORT || 5000;

const testimonialRoute = new TestimonialRoute();

server.use(cors);
server.use(bodyParser.json());

server.use("/", testimonialRoute.router);

server.listen(port, () => {
	console.log(`Server is running on localhost:${port}`);
});
