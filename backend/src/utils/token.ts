import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createAccessToken = (payload: object) => {
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  if (!accessTokenSecret) {
    throw new Error("Access token secret not provided");
  }
  return jwt.sign(payload, accessTokenSecret, {
    expiresIn: "1d",
  });
};

const hashPassword = (password: string) =>
  bcrypt.hashSync(password, parseInt(process.env.SALT_ROUNDS || "10"));

const verifyPassword = (password: string, hash: string) =>
  bcrypt.compare(password, hash);

export { createAccessToken, hashPassword, verifyPassword };