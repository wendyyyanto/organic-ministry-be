import { PrismaClient } from "@prisma/client";

class DatabaseClient {
	protected databaseClient: PrismaClient;

	constructor() {
		this.databaseClient = new PrismaClient();
	}
}

export default DatabaseClient;
