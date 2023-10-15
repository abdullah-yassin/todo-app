import axiosInstance from "@/lib/axios/axios";
import { ITodo } from "@/interfaces/todos";
import { AxiosResponse } from "axios";

export const getTodos = async (): Promise<ITodo[]> => {
  try {
    const response: AxiosResponse = await axiosInstance.get("/todos");
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createTodo = async (task: string): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axiosInstance.post("/todos", {
      task: task,
    });

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteTodo = async (todoId: number): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axiosInstance.delete(
      `/todos/${todoId}`
    );

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const completeTodo = async (todoId: number): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axiosInstance.put(`/todos/${todoId}`);

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
