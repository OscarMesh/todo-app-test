import TaskItem from "./task-item";
import useStore from "@/hook/useStore";

const TaskList = () => {
  const { todos } = useStore();

  return (
    <div className="space-y-2 flex-col flex h-full">
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TaskList;
