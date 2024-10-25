// store.ts
import { TodoStore } from "@/types";

import { create } from "zustand";

const useStore = create<TodoStore>((set) => ({
  todos: [
    {
      id: 1,
      text: "Task 1",
    },
    {
      id: 2,
      text: "Task 2",
    },
  ],
  selectedTodoId: null,

  addTodo: (todo: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text: todo,
        },
      ],
    })),

  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
      selectedTodoId: state.selectedTodoId === id ? null : state.selectedTodoId,
    })),

  setSelectedTodoId: (id: number | null) => set({ selectedTodoId: id }),

  updateTodo: (id: number, newText: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
      selectedTodoId: null,
    })),
}));

export default useStore;
