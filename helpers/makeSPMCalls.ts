import { symmetricEncrypt } from "./symmetricEncrypt";
import axios from "axios";

export async function makeSPMCalls<TResponse>(params: {
  payload: Record<string, unknown>;
  url: string;
}) {
  const baseUrl = process.env.BASE_URL;
  const publicKey = process.env.PUBLIC_KEY ?? "";
  const secretKey = process.env.SECRET_KEY ?? "";

  // console.log({ params, baseUrl, publicKey, secretKey });

  try {
    return await axios.post<
      {
        error: { message: string; errorCode: string } | null;
        data: TResponse | null;
        statusCode: number;
      }
    >(
      `${baseUrl}${params.url}`,
      {
        payload: symmetricEncrypt(JSON.stringify(params.payload), secretKey),
      },
      {
        headers: {
          "ext-auth-pub": publicKey,
        },
      }
    );
  } catch (ex: any) {
    console.error("error: ", ex.response);
    return null;
  }
}

/*
import { axiosRequestHandler } from './utils/axios.utils';
async function makeSPMCalls<TResponse>(params: { payload: Record<string, unknown>; url: string }) {
 const baseUrl = 'http://0.0.0.0:8080';
 const publicKey = 'publicKey';
 const secretKey = 'secretKey';
 return await axiosRequestHandler<
 { error: null; data: TResponse; statusCode: number },
 { error: { message: string; errorCode: string }; data: null; statusCode: number }
 >({
 method: 'POST',
 url: `${baseUrl}${params.url}`,
 headers: {
 'ext-auth-pub': publicKey,
 },
 data: {
 payload: symmetricEncrypt(JSON.stringify(params.payload), secretKey),
 },
 });
}
*/
