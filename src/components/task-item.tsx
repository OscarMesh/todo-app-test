import { Card, CardContent } from "@/components/ui/card";
import { Todo } from "@/types";
import useStore from "@/hook/useStore";
import { cn } from "@/lib/utils";

interface TaskProps {
  todo: Todo;
}

const TaskItem = ({ todo }: TaskProps) => {
  const { setSelectedTodoId, selectedTodoId } = useStore();
  const handleTodoClick = (todo: Todo) => {
    setSelectedTodoId(todo.id);
  };

  return (
    <Card className="bg-white rounded-none">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleTodoClick(todo)}
            className={`h-6 w-6 rounded-full border-2 flex items-center justify-center
                ${
                  selectedTodoId === todo.id
                    ? "bg-green-400 border-green-400"
                    : "border-blue-600"
                }`}
          >
            {selectedTodoId === todo.id && (
              <span className="text-gray-400">✓</span>
            )}
          </button>

          <span
            className={cn(
              selectedTodoId === todo.id ? "text-gray-400" : "",
              "text-sm"
            )}
          >
            {todo.text}
          </span>
        </div>
        <button
          className=" border px-4 py-1 rounded"
          onClick={() => setSelectedTodoId(todo.id)}
        >
          Edit
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;
