import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "./TaskSlice";
import { nanoid } from "nanoid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMessage from "../../Component/ErrorMessage";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [isPriority, setIsPriority] = useState(false);

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
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          className="border border-b-1"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Subject</p>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <p>Content</p>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <p>Deadline</p>

        <DatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
          showTimeSelect
          dateFormat="Pp"
        />

        {/* <input
          type="checkbox"
          value={isPriority}
          onChange={() => setIsPriority((prevState) => prevState)}
        />
        <p>Priority Task</p> */}
        <button className="px-4 py-2 text-white transition duration-200 -translate-y-1 bg-black rounded shadow-lg hover:border-black hover:border-r-2 hover:border-b-2 hover:bg-indigo-600">
          Button
        </button>
      </form>
    </div>
  );
};

export default AddTask;
