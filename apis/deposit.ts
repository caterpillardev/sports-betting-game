import { makeSPMCalls } from "../helpers/makeSPMCalls";

export async function deposit(
  countryCode: number,
  phone: number,
  depositTxnID: string,
  amount: number,
  remarks: string
) {
  const res = await makeSPMCalls<{
    balance: number;
  }>({
    url: "/txn/user/deposit",
    payload: {
      amount: amount,
      countryCode: countryCode,
      phone: phone,
      txnId: depositTxnID,
      remarks: remarks,
    },
  });

  return res?.data;
}
