import RouterBase from "@base/RouterBase";
import TestimonialService from "@services/TestimonialService";

class TestimonialRoute extends RouterBase {
    private testimonialService;

    constructor() {
        super();
        this.setRoutes();

        this.testimonialService = new TestimonialService();
    }

    public setRoutes() {
        this.router.post("/testimonial", (req, res, next): any => {
            const result = this.testimonialService.insertTestimonial({
                content: req.body["content"],
                createdBy: req.body["created_by"],
                name: req.body["name"],
                verse: req.body["verse"],
            });

            return res.json(result);
        });
    }
}

export default TestimonialRoute;
