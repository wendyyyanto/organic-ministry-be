import DatabaseClient from "@base/DatabaseClientBase";
import { InsertUserDto, GetUserProfileDto } from "src/dtos/UserDto";
import ResponseBase from "@base/ResponseBase";
import { PrismaClient } from "@prisma/client";

class UserService extends DatabaseClient {
    private userRepository: PrismaClient["users"];
    private responseBase: ResponseBase;

    constructor() {
        super();

        this.userRepository = this.databaseClient.users;
        this.responseBase = new ResponseBase();
    }

    async insertUser(payload: InsertUserDto) {
        try {
            const user = await this.userRepository.create({
                data: {
                    username: payload.username,
                    email: payload.email,
                    password: payload.password,
                    role: payload.role,
                },
            });

            return this.responseBase.success({
                statusCode: 201,
                message: "Created!",
                data: user,
            });
        } catch (error) {
            return this.responseBase.error({
                statusCode: 500,
                message: "Internal server error!",
            });
        }
    }

    async getUserProfile(payload: GetUserProfileDto) {
        try {
            const user = await this.userRepository.findFirst({
                where: {
                    user_id: payload.userId,
                },
            });

            return this.responseBase.success({
                statusCode: 200,
                message: "Success!",
                data: user,
            });
        } catch (error) {
            return this.responseBase.error({
                statusCode: 500,
                message: "Internal server error!",
            });
        }
    }
}

export default UserService;
