import { useDispatch } from "react-redux";
import { deletetask, edittask } from "../features/Tasks/TaskSlice";
import { useState } from "react";

const TaskCard = ({ task }) => {
  const { id, title, subject, content, deadline } = task;
  const [editedtitle, setTitle] = useState(title);
  const [editedsubject, setSubject] = useState(subject);
  const [editedcontent, setContent] = useState(content);
  const [editeddeadline, setDeadline] = useState(deadline);

  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const editedTask = {
      id,
      editedtitle,
      editedsubject,
      editedcontent,
      editeddeadline,
    };
    dispatch(edittask(editedTask));

    setEdit((prevState) => !prevState);
  }
  return (
    <>
      <h1>{title}</h1>
      <h2>{subject}</h2>
      <p>{content}</p>
      <p>{deadline}</p>
      <button onClick={() => setEdit((prevState) => !prevState)}>
        Edit Task
      </button>
      {edit && (
        <>
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
            <input
              type="text"
              defaultValue={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </>
      )}
      <button onClick={() => dispatch(deletetask(id))}>Delete task</button>
    </>
  );
};

export default TaskCard;
