import Banner from "./components/banner";
import TaskForm from "./components/task-form";
import TaskHeader from "./components/task-header";
import TaskList from "./components/task-list";
import UserHeader from "./components/user-header";

function App() {
  return (
    <>
      <div className="max-w-4xl w-full mx-auto my-auto p-4">
        <div className="flex flex-grow border gap-0 bg-[#f3f3f3]">
          <div className="w-[40%] flex flex-col border-r h-full overflow-auto ">
            <UserHeader />
            <Banner />
            <div className="my-3 p-2 h-full overflow-y-scroll">
              <TaskList />
            </div>
          </div>

          <div className="w-[60%] border-r h-full overflow-hidden">
            <TaskHeader />
            <div className="flex-grow mt-3 p-2">
              <TaskForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
