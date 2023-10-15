"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { getTodos } from "@/services/todosServices";
import { ITodo } from "@/interfaces/todos";
import TodosColumn from "@/components/TodosColumn/TodosColumn";
import AddTodoForm from "@/components/AddTodoForm/AddTodoForm";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios/axios";

interface Props {}

const TodosPage: FC<Props> = () => {
  const { push } = useRouter();
  const [todosList, setTodosList] = useState<ITodo[]>([{} as ITodo]);
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([]);
  const [notCompletedTodos, setNotCompletedTodos] = useState<ITodo[]>([]);

  const fetchTodos = useCallback(async () => {
    try {
      const todosData = await getTodos();
      setTodosList(todosData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (todosList) {
      setCompletedTodos(todosList.filter((todo) => todo.completed === true));
      setNotCompletedTodos(
        todosList.filter((todo) => todo.completed === false)
      );
    }
  }, [todosList]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (!loggedInUser) {
      push("/auth/login");
    }
  }, [push]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const { username, password } = JSON.parse(loggedInUser);
      axiosInstance.defaults.auth = {
        username,
        password,
      };

      fetchTodos();
    }
  }, [fetchTodos]);

  return (
    <div className="mt-3">
      <div className="flex gap-5">
        <div className="basis-1/3">
          <TodosColumn
            title="Todo"
            items={notCompletedTodos}
            fetchTodos={fetchTodos}
          />
        </div>
        <div className="basis-1/3">
          <TodosColumn
            title="Completed"
            items={completedTodos}
            fetchTodos={fetchTodos}
          />
        </div>
        <div className="basis-1/3 flex flex-col">
          <h2 className="font-bold text-xl mb-3">Add Task</h2>
          <AddTodoForm fetchTodos={fetchTodos} />
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
