import { makeSPMCalls } from "../helpers/makeSPMCalls";
import { tUser } from "../types/tUser";

export async function registerUser(user: tUser) {
  const newPlayer = await makeSPMCalls<tUser>({
    url: "/user/register",
    payload: user,
  });

  return newPlayer?.data;
}
