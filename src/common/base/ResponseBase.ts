interface IResponseArgs {
    statusCode: number;
    message: string;
    data?: any;
}

interface IResponseBase {
    status: number;
    message: string;
    data: any;
}

class ResponseBase {
    constructor() {}

    public success(args: IResponseArgs): IResponseBase {
        return {
            status: args.statusCode,
            message: args.message,
            data: args.data,
        };
    }

    public error(args: IResponseArgs): IResponseBase {
        return {
            status: args.statusCode,
            message: args.message,
            data: {},
        };
    }
}

export default ResponseBase;
