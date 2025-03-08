import { registerUser } from "./apis/registerUser";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { createSession } from "./apis/createSession";
import { deposit } from "./apis/deposit";

async function main() {
  dotenv.config();

  const user = {
    names: "name " + uuidv4(),
    userName: "userName " + uuidv4(),
    email: "email-" + uuidv4() + "@at.com",
    countryCode: "91",
    phone: Math.round(Math.random() * 10000000000000) % 10000000000,
    password: "PlayerPassword@123", //min length 8 must have capital & small letter, number, symbol
  };

  const newPlayer = await registerUser(user);
  console.log({ user, newPlayer });
}

main();
