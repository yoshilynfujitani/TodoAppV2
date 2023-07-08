import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../features/Tasks/TaskSlice";
import TaskCard from "./TaskCard";

const TaskWrapper = ({ edit, handleEdit }) => {
  const tasks = useSelector(getTasks);

  return (
    <>
      <div className="grid gap-y-4 md:grid-cols-2  lg:grid-cols-4 lg:gap-y-4">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            edit={edit}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
};

export default TaskWrapper;
