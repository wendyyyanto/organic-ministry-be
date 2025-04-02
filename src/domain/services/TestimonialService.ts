import DatabaseClient from "@base/DatabaseClientBase";
import ResponseBase from "@base/ResponseBase";
import { PrismaClient } from "@prisma/client";

interface IInsertTestimonialArgs {
    name: string;
    content: string;
    verse: string;
    createdBy: string;
    userId: string;
}

class TestimonialService extends DatabaseClient {
    private testimonialRepository: PrismaClient["testimonials"];
    private responseBase: ResponseBase;

    constructor() {
        super();

        this.responseBase = new ResponseBase();
        this.testimonialRepository = this.databaseClient.testimonials;
    }

    async insertTestimonial(payload: IInsertTestimonialArgs) {
        const testimonial = await this.testimonialRepository.create({
            data: {
                content: payload.content,
                created_by: payload.createdBy,
                name: payload.name,
                verse: payload.verse,
                user_id: payload.userId,
            },
        });

        return this.responseBase.success({
            statusCode: 201,
            message: "Created!",
            data: testimonial,
        });
    }

    async getTestimonials(args: { page: number; limit: number }) {
        const testimonials = await this.testimonialRepository.findMany({
            take: args.limit,
            skip: args.page * args.limit - args.limit,
            orderBy: {
                created_at: "desc",
            },
        });

        return this.responseBase.success({
            statusCode: 200,
            message: "Success!",
            data: testimonials,
        });
    }
}

export default TestimonialService;
