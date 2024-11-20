const MONGO_USERNAME = encodeURIComponent(process.env.MONGO_USERNAME);
const MONGO_PASSWORD = encodeURIComponent(process.env.MONGO_PASSWORD);
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
const DATABASE_NAME = process.env.DATABASE_NAME;

// Vérification si les informations de connexion sont fournies
if (!MONGO_USERNAME || !MONGO_PASSWORD || !MONGO_CLUSTER || !DATABASE_NAME) {
  throw new Error("MongoDB connection details are missing in environment variables.");
}

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.lol0x.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

const NODE_ENV = process.env.NODE_ENV || "development";

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: process.env.PORT || 3000,
  },
  environment: NODE_ENV,
};
