import { makeSPMCalls } from "../helpers/makeSPMCalls";

export async function depositStatus(depositTxnID: string) {
  const res = await makeSPMCalls<{
    balance: number;
  }>({
    url: "/txn/user/deposit/get-status",
    payload: {
      txnId: depositTxnID,
    },
  });

  return res;
}
