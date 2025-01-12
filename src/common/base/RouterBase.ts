import express, { RequestHandler, Router } from "express";

class RouterBase {
    public router: Router;

    constructor() {
        this.router = express.Router();
    }

    httpGet(path: string, callback: RequestHandler) {
        return this.router.get(path, callback);
    }

    httpPost(path: string, callback: RequestHandler) {
        return this.router.post(path, callback);
    }
}

export default RouterBase;
