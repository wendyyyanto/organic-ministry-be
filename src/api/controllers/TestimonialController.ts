import Controller from "@base/ControllerBase";
import TestimonialService from "@services/TestimonialService";

class TestimonialController extends Controller {
    private testimonialService;

    constructor() {
        super();
        this.setRoutes();

        this.testimonialService = new TestimonialService();
    }

    setRoutes() {
        this.httpGet("/testimonials", async (req, res, next): Promise<any> => {
            return await this.testimonialService.getTestimonials({
                page: parseInt(req.query["page"] as string),
                limit: parseInt(req.query["limit"] as string),
            });
        });

        this.httpPost("/testimonial", async (req, res, next): Promise<any> => {
            return await this.testimonialService.insertTestimonial({
                content: req.body["content"],
                createdBy: req.body["created_by"],
                name: req.body["name"],
                verse: req.body["verse"],
                userId: req.body["user_id"],
            });
        });
    }
}

export default TestimonialController;
