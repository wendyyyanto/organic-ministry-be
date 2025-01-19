interface InsertUserDto {
    username: string;
    email: string;
    password: string;
    role: string;
}

interface GetUserProfileDto {
    userId: string;
}

export { InsertUserDto, GetUserProfileDto };
