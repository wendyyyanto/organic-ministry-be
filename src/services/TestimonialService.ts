import DatabaseClient from "@base/DatabaseClientBase";

class TestimonialService extends DatabaseClient {
	constructor() {
		super();
	}

	async getTestimonials() {
		return await this.databaseClient.teachers.findFirst();
	}
}

export default TestimonialService;
