import { useState } from "react";
import TodoCss from "./todo.module.css";

function Todo() {
  const [task, setTask] = useState("Dev");

  function handleForm(e) {
    e.preventDefault();

    setTodo_task([...todo_task, { Task: task }]);
  }

  const todo_data = [
    { Task: "Buy Car" },
    { Task: "Buy Bike" },
    { Task: "Buy Phone" },
    { Task: "Buy Guitar" },
  ];

  const [todo_task, setTodo_task] = useState(todo_data);

  return (
    <>
      <div className={TodoCss.main}>
        <h1 className={TodoCss.heading}>Todo Application</h1>
        <div>
          <form onSubmit={handleForm}>
            <input
              type="text"
              className={TodoCss.input_Box}
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <button className={TodoCss.btn_vibrate}>Add Task</button>
          </form>
          <ul className={TodoCss.list_items}>
            {todo_task.map((value, index) => (
              <>
                <li>{value.Task}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
