import jwt from "jsonwebtoken";
import config from "config";
import logger from "./logger";

const decodeBase64 = (key: string): string =>
  Buffer.from(key, "base64").toString("ascii");

const accTokenPriKey = decodeBase64(config.get<string>("accTokenPriKey"));
const accTokenPubKey = decodeBase64(config.get<string>("accTokenPubKey"));
const refTokenPubKey = decodeBase64(config.get<string>("refTokenPubKey"));
const refTokenPriKey = decodeBase64(config.get<string>("refTokenPriKey"));

interface SignJwt {
  tokenPayload: Object;
  isAccToken: boolean;
  options: jwt.SignOptions;
}

export const signJwt = ({ tokenPayload, isAccToken, options }: SignJwt) =>
  isAccToken
    ? jwt.sign(tokenPayload, accTokenPriKey, {
        ...(options && options),
        algorithm: "RS256",
      })
    : jwt.sign(tokenPayload, refTokenPriKey, {
        ...(options && options),
        algorithm: "RS256",
      });

interface VerifyJwt {
  token: string;
  isAccToken: boolean;
}

export const verifyJwt = ({ token, isAccToken }: VerifyJwt) => {
  try {
    const decoded = isAccToken
      ? jwt.verify(token, accTokenPubKey)
      : jwt.verify(token, refTokenPubKey);

    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (err: any) {
    return {
      valid: false,
      expired: err.message,
      decoded: null,
    };
  }
};
