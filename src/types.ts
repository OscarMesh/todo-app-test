// types.ts
export interface Todo {
  id: number;
  text: string;
}

export interface TodoStore {
  todos: Todo[];
  selectedTodoId: number | null;
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  setSelectedTodoId: (id: number | null) => void;
  updateTodo: (id: number, newText: string) => void;
}
