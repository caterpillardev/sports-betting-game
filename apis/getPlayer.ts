import { makeSPMCalls } from "../helpers/makeSPMCalls";

export async function getPlayer(countryCode: string, phone: number) {
  const res = await makeSPMCalls<{
    balance: number;
    userName: string;
    isActive: boolean;
  }>({
    url: "/txn/user/get-by-phone",
    payload: {
      countryCode: countryCode,
      phone: phone,
    },
  });

  return res;
}
