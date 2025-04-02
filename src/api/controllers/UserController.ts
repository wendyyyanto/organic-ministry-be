import Controller from "@base/ControllerBase";
import UserService from "@services/UserService";

class UserController extends Controller {
    private userService;

    constructor() {
        super();
        this.userService = new UserService();
        this.setRoutes();
    }

    setRoutes() {
        this.httpGet("/user", async (req, res, next): Promise<any> => {
            try {
                const result = await this.userService.getUserProfile({
                    userId: req.params["user_id"],
                });

                return res.json(result);
            } catch (error) {
                next(error);
            }
        });

        this.httpPost("/user", async (req, res, next): Promise<any> => {
            try {
                const result = await this.userService.insertUser({
                    username: req.body["username"],
                    email: req.body["email"],
                    password: req.body["password"],
                    role: req.body["role"],
                });
                return res.json(result);
            } catch (error) {
                next(error);
            }
        });
    }
}

export default UserController;
