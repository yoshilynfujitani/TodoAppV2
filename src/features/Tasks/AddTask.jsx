import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "./TaskSlice";
import { nanoid } from "nanoid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMessage from "../../Component/ErrorMessage";
import { IoMdAdd } from "react-icons/io";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [isPriority, setIsPriority] = useState(false);

  const [willAddNewTask, setWillAddNewTask] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !subject || !content || !deadline)
      return <ErrorMessage error={"Do not leave any empty inpput field"} />;

    const SerializedDeadline = deadline.toLocaleString();
    const newTask = {
      id: nanoid(),
      title,
      subject,
      content,
      SerializedDeadline,
      priority: isPriority,
    };
    console.log(newTask);
    dispatch(addtask(newTask));
    setTitle("");
    setSubject("");
    setContent("");
    setDeadline(new Date());
    setIsPriority(false);

    setWillAddNewTask((prevState) => !prevState);
  }

  const InputFieldStyle = `border border-b-1 px-2 py-1 rounded-sm w-full`;
  return (
    <>
      {!willAddNewTask ? (
        <button
          onClick={() => setWillAddNewTask((prevState) => !prevState)}
          className="mx-6 my-2 px-2 py-1 rounded-md border flex items-center border-black font-Poppins font-semibold"
        >
          <IoMdAdd />
          Add New Task
        </button>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white px-10 py-5 rounded-md shadow-sm w-96">
            <form onSubmit={handleSubmit}>
              <p>Title</p>
              <input
                className={InputFieldStyle}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p>Subject</p>
              <input
                className={InputFieldStyle}
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <p>Content</p>
              <textarea
                className={`${InputFieldStyle} max-h-48 min-h-12`}
                type="textbox"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <p>Deadline</p>

              <DatePicker
                className={InputFieldStyle}
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                showTimeSelect
                dateFormat="Pp"
              />

              <div className="flex">
                <input
                  type="checkbox"
                  value={isPriority}
                  onChange={() => setIsPriority((prevState) => !prevState)}
                />
                <p>Priority Task</p>
              </div>
              <button className="my-2 px-2 py-1 bg-black text-white font-Poppins font-semibold rounded-md">
                Add Task
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
