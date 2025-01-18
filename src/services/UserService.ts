import DatabaseClient from "@base/DatabaseClientBase";
import { InsertUserDto, GetUserProfileDto } from "src/dtos/UserDto";

class UserService extends DatabaseClient {
    private userRepository;

    constructor() {
        super();

        this.userRepository = this.databaseClient.users;
    }

    async insertUser(payload: InsertUserDto) {
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
    }

    async getUserProfile(payload: GetUserProfileDto) {
        const user = await this.userRepository.findFirst({
            where: {
                id: payload.userId,
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                created_at: true,
                updated_at: true,
            },
        });

        if (!user) {
            return this.responseBase.error({
                statusCode: 404,
                message: "User not found!",
            });
        }

        return this.responseBase.success({
            statusCode: 200,
            message: "Success!",
            data: user,
        });
    }
}

export default UserService;
