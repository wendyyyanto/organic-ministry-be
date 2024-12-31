import cors from "cors";

const corsMiddleware = cors({
	origin: "*",
	allowedHeaders: "*",
	methods: ["GET, POST, PUT, DELETE, PATCH, OPTIONS"]
});

export { corsMiddleware as cors };
