import { Router, Request, Response, NextFunction } from "express";

abstract class Controller {
    public router: Router;

    constructor() {
        this.router = Router();
    }

    protected httpGet(
        path: string,
        handler: (
            req: Request,
            res: Response,
            next: NextFunction,
        ) => Promise<any>,
    ) {
        this.router.get(path, handler);
    }

    protected httpPost(
        path: string,
        handler: (
            req: Request,
            res: Response,
            next: NextFunction,
        ) => Promise<any>,
    ) {
        this.router.post(path, handler);
    }

    abstract setRoutes(): void;
}

export default Controller;
