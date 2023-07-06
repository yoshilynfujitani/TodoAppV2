import { useSelector } from "react-redux";
import { getTasks } from "../features/Tasks/TaskSlice";

export const TaskCounter = () => {
  const task = useSelector(getTasks);
  const NoOfTask = task.length;
  return (
    <div>
      You currently have {NoOfTask}
      {`${NoOfTask > 1 ? " tasks" : " task"}`} remaining
    </div>
  );
};
