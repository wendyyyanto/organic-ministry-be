import * as bcrypt from "bcrypt";

const generateHashPassword = (password: string) => {
    const hashRounds = 8;

    const salt = bcrypt.genSaltSync(hashRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
};

export { generateHashPassword };
