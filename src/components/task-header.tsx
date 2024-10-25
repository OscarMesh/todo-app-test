import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import useStore from "@/hook/useStore";

const TaskHeader = () => {
  const { selectedTodoId } = useStore();
  return (
    <Card className="bg-blue-600 text-white rounded-none  flex-1 h-[123px]">
      <CardHeader className="">
        <CardTitle className="text-center justify-center flex items-center w-full">
          {selectedTodoId !== null ? "Edit" : "Add"} Task
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default TaskHeader;
