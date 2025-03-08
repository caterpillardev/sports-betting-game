import CryptoJS from "crypto-js";

export function symmetricEncrypt(data: string, key: string) {
  return CryptoJS.AES.encrypt(data, key).toString();
}
