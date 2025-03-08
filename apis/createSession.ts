import { makeSPMCalls } from "../helpers/makeSPMCalls";

export async function createSession(userId: number, bCreate: boolean) {
  const res = await makeSPMCalls<{
    session: string | null;
  }>({
    url: "/user/session",
    payload: {
      userId: userId,
      action: bCreate ? "create" : "destroy",
    },
  });

  return res?.data;
}
