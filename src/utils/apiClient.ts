import http from "./http";
import { AxiosResponse } from "axios";

export async function getRequest<T>(url: string, params?: object): Promise<T> {
  const response: AxiosResponse<T> = await http.get(url, { params });
  return response?.data;
}

export async function postRequest<T>(url: string, data?: object): Promise<T> {
  const response: AxiosResponse<T> = await http.post(url, data);
  return response?.data;
}
