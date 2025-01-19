import DatabaseClient from "@base/DatabaseClientBase";
import { generateHashPassword } from "@utils/password";
import InsertUserDto from "src/dtos/InsertUserDto";

class UserService extends DatabaseClient {
    private userRepository;

    constructor() {
        super();

        this.userRepository = this.databaseClient.users;
    }

    async insertUser(payload: InsertUserDto) {
        const hashedPassword = generateHashPassword(payload.password);
        const user = await this.databaseClient.$transaction([
            this.userRepository.create({
                data: {
                    username: payload.username,
                    email: payload.email,
                    password: hashedPassword,
                    role: payload.role,
                },
            }),
        ]);

        return user;
    }
}

export default UserService;
