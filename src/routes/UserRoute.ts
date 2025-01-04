import RouterBase from "@base/RouterBase";
import UserService from "@services/UserService";

class UserRoute extends RouterBase {
    private userService;

    constructor() {
        super();
        this.setRoutes();

        this.userService = new UserService();
    }

    setRoutes() {
        this.router.post("/user", async (req, res, next): Promise<any> => {
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
