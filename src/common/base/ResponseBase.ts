type successResponseArgs = {
    statusCode: number;
    message: string;
    data: any;
};

type errorResponseArgs = {
    statusCode: number;
    message: string;
};

class ResponseBase {
    constructor() {}

    public success(args: successResponseArgs) {
        return {
            status: args.statusCode,
            message: args.message,
            data: args.data,
        };
    }

    public error(args: errorResponseArgs) {
        return {
            status: args.statusCode,
            message: args.message,
            data: {},
        };
    }
}

export default ResponseBase;
