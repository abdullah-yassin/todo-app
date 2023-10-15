import { FC, useState } from "react";
import { createTodo } from "@/services/todosServices";

interface Props {
  fetchTodos: () => void;
}

const AddTodoForm: FC<Props> = ({ fetchTodos }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await createTodo(taskName);

    if (response && response.status === 200) {
      setTaskName("");
      fetchTodos();
    } else {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="shadow-md border rounded p-3 bg-white min-h-[800px]"
    >
      <div className="mb-1">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Task Name
        </label>
        <input
          className="shadow appearance-none border rounded-md w-full p-4 text-gray-700 mb-3 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
          id="task"
          type="text"
          name="task"
          value={taskName}
          placeholder="Task Name"
          onChange={(event) => {
            const { value } = event.target;

            setTaskName(value);
          }}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs italic text-center mb-6">
          Failed to create task
        </p>
      )}
      <div className="flex items-center justify-start">
        <input
          type="submit"
          value="Add Todo"
          className="bg-primary text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
        />
      </div>
    </form>
  );
};

export default AddTodoForm;
