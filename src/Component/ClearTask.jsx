import { useDispatch, useSelector } from "react-redux";
import { cleartask, getTasks } from "../features/Tasks/TaskSlice";
import { MdOutlineDelete } from "react-icons/md";

const ClearTask = () => {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center py-10">
      {tasks.length > 0 ? (
        <button
          onClick={() => dispatch(cleartask())}
          className="flex items-center gap-1 border-red-500 bg-white text-red-500 border font-Poppins font-semibold  px-2 py-1 rounded-md"
        >
          <MdOutlineDelete />
          Clear All Tasks
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ClearTask;
