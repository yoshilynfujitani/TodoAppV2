import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "./TaskSlice";
import { nanoid } from "nanoid";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: nanoid(),
      title,
      subject,
      content,
      deadline,
    };
    dispatch(addtask(newTask));
    setTitle("");
    setSubject("");
    setContent("");
    setDeadline("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
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
        <input
          type="text"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
