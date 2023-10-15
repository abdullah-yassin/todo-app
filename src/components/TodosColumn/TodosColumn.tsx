import { ITodo } from "@/interfaces/todos";
import { FC } from "react";
import TodoCard from "../TodoCard/TodoCard";

interface Props {
  title: string;
  items: ITodo[];
  fetchTodos: () => void;
}

const TodosColumn: FC<Props> = ({ title, items, fetchTodos }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">{title}</h2>
      <div className="flex flex-col shadow-md border rounded p-3 bg-white min-h-[800px] max-h-[800px] overflow-auto">
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <TodoCard
              fetchTodos={fetchTodos}
              key={`todo-${item.id}`}
              data={item}
            />
          ))}
      </div>
    </div>
  );
};

export default TodosColumn;
