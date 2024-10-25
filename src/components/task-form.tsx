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
    if (todos.length > 0 && selectedTodoId === null) {
      setSelectedTodoId(todos[0].id);
      setTaskName(todos[0].text);
    }
  }, [todos, selectedTodoId, setSelectedTodoId]);

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
      <Label>Task name</Label>
      <Input
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {selectedTodoId !== null ? "Save" : "Add"} Task
        </button>
        {selectedTodoId !== null && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
