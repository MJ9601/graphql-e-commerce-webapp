const {
  PORT,
  MONGODB_URI,
  ACC_TOKEN_PRIVATE_KEY,
  ACC_TOKEN_PUBLIC_KEY,
  REF_TOKEN_PRIVATE_KEY,
  REF_TOKEN_PUBLIC_KEY,
} = process.env;
export default {
  port: PORT || 8080,
  mongoUri:
    MONGODB_URI || "mongodb://localhost:27017/graphql-E-Commerce",
  accTokenTimeToLive: "15m",
  refTokenTimeToLive: "1y",
  accTokenPrivateKey: ACC_TOKEN_PRIVATE_KEY,
  accTokenPublicKey: ACC_TOKEN_PUBLIC_KEY,
  refTokenPrivateKey: REF_TOKEN_PRIVATE_KEY,
  refTokenPublicKey: REF_TOKEN_PUBLIC_KEY
};
