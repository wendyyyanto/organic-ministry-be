import RouterBase from "@base/RouterBase";

class TestimonialRoute extends RouterBase {
	constructor() {
		super();
		this.setRoutes();
	}

	public setRoutes() {
		this.router.get("/testimonials", (req, res, next) => {
			res.send("Testimonials");
		});
	}
}

export default TestimonialRoute;
