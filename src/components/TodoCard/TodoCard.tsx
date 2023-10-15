"use client";

import { ITodo } from "@/interfaces/todos";
import { IUser } from "@/interfaces/user";
import { getAllUsers } from "@/services/userServices";
import { FC, useState, useEffect, Fragment, SetStateAction } from "react";
import UserProfile from "../Header/UserProfile/UserProfile";
import AssignedUser from "./AssignedUser/AssignedUser";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import TodoModal from "../TodoModal/TodoModal";
import { ModalActionType } from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faClose } from "@fortawesome/free-solid-svg-icons";
import { deleteTodo, completeTodo } from "@/services/todosServices";

interface Props {
  data: ITodo;
  fetchTodos: () => void;
}

const TodoCard: FC<Props> = ({ data, fetchTodos }) => {
  const [usersData, setUsersData] = useState<IUser[]>([{} as IUser]);
  const [assignedUser, setAssignedUser] = useState({} as IUser);
  const [activeItem, setActiveItem] = useState<ITodo>({} as ITodo);
  const [isShowDeleteDialog, setIsShowDeleteDialog] = useState<boolean>(false);

  const deleteTodoHandler = async () => {
    const response = await deleteTodo(activeItem.id);

    if (response && response.status === 200) {
      fetchTodos();
      setIsShowDeleteDialog(false);
    }
  };

  const completeTodoHandler = async (id: number) => {
    const response = await completeTodo(id);

    if (response && response.status === 200) {
      fetchTodos();
    }
  };

  const actionsList: ModalActionType[] = [
    {
      id: "delete-action",
      name: "Delete",
      onClickHandler: () => deleteTodoHandler(),
    },
    {
      id: "cancel-action",
      name: "Cancel",
      onClickHandler: () => setIsShowDeleteDialog(false),
    },
  ];

  const onClickDeleteHandler = (item: ITodo) => {
    setIsShowDeleteDialog(true);
    setActiveItem(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (usersData) {
      setAssignedUser(
        usersData.find((user) => user.id === data.user_id) || ({} as IUser)
      );
    }
  }, [usersData, data]);

  return (
    <>
      <div
        id={`todo-${data.id}`}
        className="flex items-center p-3 mb-3 border shadow-md bg-white rounded"
      >
        <div className="flex justify-start me-3">
          <AssignedUser avatar={assignedUser.avatar} />
        </div>
        <div className="flex items-center">
          <h3 className="font-bold text-lg me-2">Task:</h3>
          <span className={`${data.completed ? "line-through" : ""}`}>
            {data.task}
          </span>
        </div>
        <div className="flex ms-auto">
          <button
            className="me-2 p-2 bg-green-600 flex border rounded"
            onClick={() => {
              completeTodoHandler(data.id);
            }}
          >
            {!data.completed ? (
              <FontAwesomeIcon icon={faCheck} className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faClose} className="text-white" />
            )}
          </button>
          <button
            className="p-2 bg-red-600 flex border rounded"
            onClick={() => onClickDeleteHandler(data)}
          >
            <FontAwesomeIcon icon={faTrash} className="text-white" />
          </button>
        </div>
      </div>
      {isShowDeleteDialog && (
        <Modal withActions={true} actionsList={actionsList}>
          <p className="text-lg">
            Are you sure task:{" "}
            <span className="font-bold text-lg">{activeItem.task}</span>
          </p>
        </Modal>
      )}
    </>
  );
};

export default TodoCard;
