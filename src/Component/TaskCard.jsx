import { useDispatch } from "react-redux";
import { deletetask, edittask } from "../features/Tasks/TaskSlice";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar3 } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { MdTitle } from "react-icons/md";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const TaskCard = ({ task, edit, handleEdit }) => {
  const { id, title, subject, content, SerializedDeadline, priority } = task;
  const [editedtitle, setTitle] = useState(title);
  const [editedsubject, setSubject] = useState(subject);
  const [editedcontent, setContent] = useState(content);
  const [editeddeadline, setDeadline] = useState(SerializedDeadline);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const SerializedDeadline = editeddeadline.toLocaleString();

    const editedTask = {
      id,
      editedtitle,
      editedsubject,
      editedcontent,
      SerializedDeadline,
    };
    dispatch(edittask(editedTask));

    handleEdit();
  }
  return (
    <>
      <div
        className={`mx-6 p-6 border border-b-1 rounded-md shadow-sm bg-white `}
      >
        <div
          className={`${
            edit ? "opacity-50" : ""
          } flex flex-col h-full justify-between`}
        >
          <div className="">
            {" "}
            {priority ? (
              <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-md">
                <div className="h-5 w-5 rounded-full bg-red-600"></div>
                <h1 className="font-Poppins font-semibold">
                  Marked as Priority Task!
                </h1>
              </div>
            ) : (
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
                <div className="h-5 w-5 rounded-full bg-gray-600"></div>
                <h1 className="font-Poppins font-semibold">Pending Task</h1>
              </div>
            )}
            <h1 className="text-2xl font-bold">Task</h1>
            <h1 className="flex items-center gap-2">
              <MdTitle />
              {title}
            </h1>
            <h2 className="text-lg font-semibold">Type</h2>
            <h2 className="flex items-center gap-2">
              <AiOutlineBook />
              {subject}
            </h2>
            <p className="text-lg font-semibold">Details</p>
            <p className="flex items-center gap-2">
              <TbListDetails />
              {content}
            </p>
            <p className="text-lg font-semibold">Deadline</p>
            <p className="flex items-center gap-2">
              <BsCalendar3 />
              {SerializedDeadline}
            </p>
          </div>
          <div className="space-x-4 py-2 flex">
            <button
              onClick={handleEdit}
              className="flex items-center gap-1 border-yellow-400 text-yellow-400 border px-2 py-1 rounded-md font-Poppins  font-semibold"
            >
              <AiOutlineEdit />
              Edit Task
            </button>
            <button
              onClick={() => dispatch(deletetask(id))}
              className="flex items-center gap-1 border-red-500 text-red-500 border font-Poppins font-semibold  px-2 py-1 rounded-md"
            >
              <MdOutlineDelete />
              Delete task
            </button>
          </div>
        </div>
        {edit && (
          <>
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
              <div className="bg-white">
                <form onSubmit={handleSubmit}>
                  <p>Title</p>
                  <input
                    type="text"
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <p>Subject</p>
                  <input
                    type="text"
                    defaultValue={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <p>Content</p>
                  <input
                    type="text"
                    defaultValue={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <p>Deadline</p>
                  <DatePicker
                    selected={new Date(Date.parse(editeddeadline))}
                    onChange={(date) => setDeadline(date)}
                    showTimeSelect
                    dateFormat="Pp"
                  />
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TaskCard;
