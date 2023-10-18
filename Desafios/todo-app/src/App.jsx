import styles from "./App.module.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3333/tasks";

/**
 * Renders the whole application.
 * Lists all tasks and allows the user to create new ones.
 * @returns {JSX.Element}
 */

const TASKS = [];
const doneTasks = [];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3333/tasks", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => setTasks(data)));
  }, []);

  async function handleSubmit(formData) {
    const res = await fetch("http://localhost:3333/tasks", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  }

  async function handleCheckChange(id, checked) {
    await fetch("http://localhost:3333/tasks/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ finished: checked }),
    });

    const newItems = tasks.map((item) =>
      item.id === id ? { ...item, finished: checked } : item
    );
    setTasks(newItems);
  }

  async function handleDelete(id) {
    await fetch("http://localhost:3333/tasks/" + id, {
      method: "DELETE",
    });

    const newItems = tasks.filter((item) => item.id !== id);
    setTasks(newItems);
  }

  async function handleFilter(checked) {
    fetch("http://localhost:3333/tasks", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((data) =>
          setTasks(
            data.filter((item) => (checked ? item.finished !== checked : data))
          )
        )
    );
  }

  return (
    <div className={styles.container}>
      <TaskForm
        onSubmit={handleSubmit}
        onCheckedChange={handleFilter}
        total={tasks.length}
        totalFinished={tasks.filter((item) => item.finished === true).length}
      />

      <ul className={styles.itemList}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskList
              key={task.id}
              item={task}
              onDelete={handleDelete}
              onCheckedChange={handleCheckChange}
            />
          ))
        ) : isLoading ? (
          <p>Buscando itens...</p>
        ) : (
          <p>Não há nenhuma tarefa.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
