import DatabaseClient from "@base/DatabaseClientBase";
import InsertUserDto from "src/dtos/InsertUserDto";

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

        return user;
    }
}

export default UserService;
