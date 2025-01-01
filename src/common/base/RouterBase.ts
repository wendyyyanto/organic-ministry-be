import express, { Router } from "express";

class RouterBase {
	public router: Router;

	constructor() {
		this.router = express.Router();
	}
}

export default RouterBase;
