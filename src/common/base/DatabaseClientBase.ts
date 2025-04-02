import { PrismaClient } from "@prisma/client";

class DatabaseClient {
    protected databaseClient: PrismaClient;

    constructor() {
        this.databaseClient = new PrismaClient({
            log: ["query", "info", "warn", "error"],
        });
    }
}

export default DatabaseClient;
