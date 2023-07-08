import { useSelector } from "react-redux";
import { getTasks } from "../features/Tasks/TaskSlice";

export const TaskCounter = () => {
  const task = useSelector(getTasks);
  const NoOfTask = task.length;
  return (
    <div className="font-Poppins mx-6">
      {`${
        NoOfTask === 0
          ? "You are currently up to date! "
          : NoOfTask > 1
          ? `You currently have ${NoOfTask} tasks remaining`
          : `You currently have ${NoOfTask} task remaining`
      }`}
    </div>
  );
};
