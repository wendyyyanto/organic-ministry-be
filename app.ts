import "module-alias/register";

import express from "express";
import "dotenv/config";

import { cors } from "@middlewares/CorsMiddleware";
import bodyParser from "body-parser";
import TestimonialController from "@controllers/TestimonialController";
import UserController from "@controllers/UserController";
import ScheduleController from "@controllers/ScheduleController";

const server = express();
const port = process.env.PORT || 5000;

// Routes
const userController = new UserController();
const testimonialController = new TestimonialController();
const scheduleController = new ScheduleController();

// Middlewares
server.use(cors);
server.use(bodyParser.json());
server.use((req, res, next) => {
    res.setTimeout(5000, () => {
        return res.status(408).json({
            message: "Request timeout!",
        });
    });
    next();
});

server.use("/v1", [
    testimonialController.router,
    userController.router,
    scheduleController.router,
]);

server.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});
