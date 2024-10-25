import { FormEvent, useEffect, useState } from "react";
import { Input } from "./ui/input";
import useStore from "@/hook/useStore";
import { Label } from "./ui/label";

const TaskForm = () => {
  const [taskName, setTaskName] = useState<string>("");
  const {
    todos,
    selectedTodoId,
    setSelectedTodoId,
    updateTodo,
    addTodo,
    deleteTodo,
  } = useStore();

  useEffect(() => {
    const selectedTodo = todos.find((todo) => todo.id === selectedTodoId);
    if (selectedTodo) {
      setTaskName(selectedTodo.text);
    }
  }, [selectedTodoId, todos]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    if (selectedTodoId !== null) {
      updateTodo(selectedTodoId, taskName);
    } else {
      addTodo(taskName);
    }
    setTaskName("");
    setSelectedTodoId(null);
  };

  const handleDelete = () => {
    if (selectedTodoId !== null) {
      deleteTodo(selectedTodoId);
      setTaskName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col justify-between space-y-4"
    >
      <Label>Task Name</Label>
      <Input
        placeholder="Training at the gym"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <div className="flex gap-2">
        {selectedTodoId !== null && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        )}
        <button
          type="submit"
          className="bg-blue-500 w-full text-white px-4 py-2 rounded"
        >
          {selectedTodoId !== null ? "Save" : "Add"} Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
