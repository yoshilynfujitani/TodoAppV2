import { TaskCounter } from "./Component/TaskCounter";
import TaskWrapper from "./Component/TaskWrapper";
import AddTask from "./features/Tasks/AddTask";

function App() {
  return (
    <>
      <TaskCounter />
      <AddTask />
      <TaskWrapper />
    </>
  );
}

export default App;
