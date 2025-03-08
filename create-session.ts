import dotenv from "dotenv";
import { createSession } from "./apis/createSession";
import user1 from "./data/user1.json";

async function main() {
  dotenv.config();
  const session1 = await createSession(user1.userId, true);
  console.log(`LobbyUrl: ${process.env.BETBY_URL}?token=${session1?.data?.session || ""}`);
}

main();
