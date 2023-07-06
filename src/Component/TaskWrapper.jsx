import { useDispatch, useSelector } from "react-redux";
import { cleartask, getTasks } from "../features/Tasks/TaskSlice";
import TaskCard from "./TaskCard";

const TaskWrapper = () => {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  return (
    <>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
      <button onClick={() => dispatch(cleartask())}>Clear All Tasks</button>
    </>
  );
};

export default TaskWrapper;
