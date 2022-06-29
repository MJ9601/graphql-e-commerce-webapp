import { CookieOptions } from "express";

export const accTokenOptions: CookieOptions = {
  maxAge: 9e5,
  httpOnly: true,
  domain: "localhost",
  sameSite: "strict",
  path: "/",
  secure: process.env.NODE_ENV === "production",
};

export const refTokenOptions: CookieOptions = {
  ...accTokenOptions,
  maxAge: 3.154e10,
};
