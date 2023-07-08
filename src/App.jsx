import { useState } from "react";
import { TaskCounter } from "./Component/TaskCounter";
import TaskWrapper from "./Component/TaskWrapper";
import AddTask from "./features/Tasks/AddTask";
import ClearTask from "./Component/ClearTask";
import Title from "./Component/Title";

function App() {
  const [edit, setEdit] = useState(false);
  function handleEdit() {
    console.log("hakdog");
    setEdit((prevState) => !prevState);
  }
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="container">
          <Title />
          <div className={`${edit ? "opacity-40" : ""}`}>
            <TaskCounter />
            <AddTask />
          </div>
          <div className="">
            <TaskWrapper edit={edit} handleEdit={handleEdit} />
            <ClearTask />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
