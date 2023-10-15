import { AxiosResponse } from "axios";
import axiosInstance from "@/lib/axios/axios";
import { IUser } from "@/interfaces/user";

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const response: AxiosResponse = await axiosInstance.get("/users");
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
