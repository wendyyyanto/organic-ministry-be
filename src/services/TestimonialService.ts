import DatabaseClient from "@base/DatabaseClientBase";
import InsertTestimonialDto from "src/dtos/InsertTestimonialDto";

class TestimonialService extends DatabaseClient {
    private testimonialRepository;

    constructor() {
        super();

        this.testimonialRepository = this.databaseClient.testimonials;
    }

    async insertTestimonial(payload: InsertTestimonialDto) {
        const testimonial = await this.testimonialRepository.create({
            data: {
                content: payload.content,
                created_by: payload.createdBy,
                name: payload.name,
                verse: payload.verse,
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
