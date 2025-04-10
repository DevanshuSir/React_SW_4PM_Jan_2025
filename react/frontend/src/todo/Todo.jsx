import { useEffect, useState } from "react";
import TodoCss from "./todo.module.css";
import { toast } from "react-hot-toast";
import Task from "./Task";

function Todo() {
  const [task, setTask] = useState("");
  const [totalTask, setTotalTask] = useState(0);
  const [completeTask, setCompleteTask] = useState(0);
  const [pendingTask, setPendingTask] = useState(0);

  function handleForm(e) {
    e.preventDefault();

    const mytask = task.trim();

    if (!mytask) {
      toast.error("Please add task 🙂");
    } else {
      const isVerify = todo_task.some((value, index) => {
        return value.Task.toLowerCase() === mytask.toLowerCase();
      });

      if (isVerify) {
        toast.error("Task already added.❌");
        setTask("");
      } else {
        setTodo_task([...todo_task, { Task: task, complete: false }]);
        toast.success("Task Added..✔️");
        setTask("");
      }
    }
  }

  const todo_data = JSON.parse(localStorage.getItem("todo_data")) || [];

  const [todo_task, setTodo_task] = useState(todo_data);

  function handleClick(id) {
    const copyOfArray = [...todo_task];

    copyOfArray[id].complete = !copyOfArray[id].complete;

    setTodo_task(copyOfArray);
  }

  function handleDelete(id) {
    const copyDeleteArray = [...todo_task];

    const deletedValues = copyDeleteArray.filter((value, index) => {
      return index !== id;
    });

    setTodo_task(deletedValues);
  }

  function handleUpdate(id) {
    const copyUpdateArray = [...todo_task];
    const oldValue = copyUpdateArray[id].Task;

    const newValue = prompt(`Update Task :- ${oldValue} `, oldValue);

    if (newValue) {
      const newObj = { Task: newValue, complete: false };

      copyUpdateArray.splice(id, 1, newObj);

      setTodo_task(copyUpdateArray);
    }
  }

  useEffect(() => {
    const copyOfArray = [...todo_task];

    const TotalTasks = copyOfArray.filter((value, index) => {
      return value;
    });

    setTotalTask(TotalTasks.length);

    const completeTasks = copyOfArray.filter((value, index) => {
      return value.complete;
    });

    setCompleteTask(completeTasks.length);

    const pendingTask = copyOfArray.filter((value, index) => {
      return !value.complete;
    });

    setPendingTask(pendingTask.length);

    localStorage.setItem("todo_data", JSON.stringify(copyOfArray));
  }, [todo_task]);

  function handleClearAll() {
    setTodo_task([]);
  }

  return (
    <>
      <div className={TodoCss.main}>
        <h1 className={TodoCss.heading}>My Todo Application 😍</h1>
        <Task Ctask={completeTask} Ttask={totalTask} />
        <h4> Pending Tasks :- {pendingTask}</h4>
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
            {todo_task.length === 0 ? (
              <>
                <p className="text-center">No Task Found 🫤</p>
                <hr />
              </>
            ) : (
              todo_task.map((value, index) => (
                <>
                  <li>
                    <div className="form-check d-inline">
                      <input
                        type="checkbox"
                        checked={value.complete}
                        onClick={() => {
                          handleClick(index);
                        }}
                        className="form-check-input"
                      />{" "}
                    </div>

                    <span
                      style={{
                        textDecoration:
                          value.complete === true ? "line-through red" : "",
                      }}
                    >
                      {value.Task}
                    </span>
                    <i
                      className="bi bi-trash float-end text-dark "
                      onClick={() => {
                        handleDelete(index);
                      }}
                    ></i>
                    <i
                      class="bi bi-pencil-square float-end text-success me-3 "
                      onClick={() => {
                        handleUpdate(index);
                      }}
                    ></i>
                  </li>
                </>
              ))
            )}
          </ul>

          <button
            className={TodoCss.clear}
            onClick={handleClearAll}
            style={{ display: todo_task.length === 0 ? "none" : "block" }}
          >
            Clear All 👍
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
