import RouterBase from "@base/RouterBase";
import UserService from "@services/UserService";
import { Request, Response } from "express";

class UserRoute extends RouterBase {
    private userService;

    constructor() {
        super();
        this.setRoutes();

        this.userService = new UserService();
    }

    setRoutes() {
        this.httpGet(
            "/profile",
            async (req: Request, res: Response, next): Promise<any> => {
                const result = await this.userService.getUserProfile({
                    userId: req.params["userId"],
                });

                return res.json(result);
            },
        );

        this.httpPost("/user", async (req, res, next): Promise<any> => {
            const result = await this.userService.insertUser({
                username: req.body["username"],
                email: req.body["email"],
                password: req.body["password"],
                role: req.body["role"],
            });

            return res.json(result);
        });
    }
}

export default UserRoute;
