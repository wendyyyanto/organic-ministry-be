import "module-alias/register";

import express from "express";
import "dotenv/config";

import { cors } from "@middlewares/CorsMiddleware";
import bodyParser from "body-parser";
import TestimonialRoute from "@routes/TestimonialRoute";
import UserRoute from "@routes/UserRoute";

const server = express();
const port = process.env.PORT || 5000;

// Routes
const userRoute = new UserRoute();
const testimonialRoute = new TestimonialRoute();

// Middlewares
server.use(cors);
server.use(bodyParser.json());

server.use("/v1", [testimonialRoute.router, userRoute.router]);

server.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});
