import express, { RequestHandler, Router } from "express";

class Controller {
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

    httpPut(path: string, callback: RequestHandler) {
        return this.router.put(path, callback);
    }
}

export default Controller;
