import DatabaseClient from "@base/DatabaseClientBase";
import InsertTestimonialDto from "src/dtos/InsertTestimonialDto";

class TestimonialService extends DatabaseClient {
    private testimonialRepository;

    constructor() {
        super();

        this.testimonialRepository = this.databaseClient.testimonials;
    }

    async insertTestimonial(payload: InsertTestimonialDto) {
        const testimonial = await this.databaseClient.$transaction([
            this.testimonialRepository.create({
                data: {
                    content: payload.content,
                    created_by: payload.createdBy,
                    name: payload.name,
                    verse: payload.verse,
                },
            }),
        ]);

        return testimonial;
    }
}

export default TestimonialService;
