import dotenv from "dotenv";
import { v4 as uuidv4 } from 'uuid';
import { deposit } from "./apis/deposit";
import user1 from "./data/user1.json";

async function main() {
  dotenv.config();
  const depositTxnID1 = uuidv4();
  const deposit1 = await deposit(user1.countryCode, user1.phone, depositTxnID1, 100, "test");
  console.log({deposit1});
}

main();
