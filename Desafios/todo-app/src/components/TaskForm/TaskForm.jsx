import { useRef, useState } from "react";
import styles from "./TaskForm.module.css";

function TaskForm({ onSubmit, onCheckedChange, total, totalFinished }) {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      task,
      finished: false,
    };

    setTask("");
    inputRef.current?.focus();
    onSubmit(formData);
  }

  function handleChange(event) {
    onCheckedChange(event.target.checked);
  }

  return (
    <div style={{ width: "100%" }}>
      <h1 className={styles.title}>Minhas Tarefas</h1>
      <form
        className={styles.taskForm}
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          ref={inputRef}
          placeholder="Passear com o cachorro"
          className={styles.input}
          value={task}
          onChange={(event) => setTask(event.target.value)}
          required
          minLength={1}
        />
        <button className={styles.submitButton}>Criar tarefa</button>
      </form>

      <div className={styles.label}>
        <input id="checkFilter" type="checkbox" onChange={handleChange} />
        <label htmlFor="checkFilter">Filtrar tarefas pendentes </label>
        <span className={styles.span}>
          {totalFinished} de {total}
        </span>
      </div>
    </div>
  );
}

export default TaskForm;
