import cors from "cors";

const corsMiddleware = cors({
	origin: "*",
	allowedHeaders: "*",
	methods: ["GET, POST, PUT, DELETE, PATCH"]
});

export { corsMiddleware as cors };
