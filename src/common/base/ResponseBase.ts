type successResponseArgs = {
    statusCode: number;
    message: string;
    data: any;
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
}

export default ResponseBase;
