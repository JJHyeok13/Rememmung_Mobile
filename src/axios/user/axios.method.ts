import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "@axios/user/axios.Instance";

// @ts-ignore
export const PostAxiosInstance = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(url, data, config);
  return response;
};

// @ts-ignore
export const GetAxiosInstance = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const res = await axiosInstance.get(url, config);
  return res;
};

// @ts-ignore
export const PatchAxiosInstance = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const res = await axiosInstance.patch(url, data, config);
  return res;
};

// @ts-ignore
export const DeleteAxiosInstance = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(url, config);
  return res;
};
