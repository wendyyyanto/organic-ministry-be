import { PrismaClient } from "@prisma/client";
import { Application } from "express";

class HttpController {
	protected prisma: PrismaClient;
	protected app: Application;

	constructor(app: Application) {
		this.app = app;
		this.prisma = new PrismaClient();
	}

	public setRoutes() {}
}

export default HttpController;
