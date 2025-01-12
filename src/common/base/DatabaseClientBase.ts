import { PrismaClient } from "@prisma/client";
import ResponseBase from "@base/ResponseBase";

class DatabaseClient {
    protected databaseClient: PrismaClient;
    protected responseBase: ResponseBase;

    constructor() {
        this.responseBase = new ResponseBase();
        this.databaseClient = new PrismaClient();
    }
}

export default DatabaseClient;
