import styles from "./TaskList.module.css";
import { Trash2 } from "lucide-react";

function TaskList({ item, onDelete, onCheckedChange }) {
  function handleChange(event) {
    onCheckedChange(item.id, event.target.checked);
  }

  return (
    <li className={styles.item}>
      <input type="checkbox" checked={item.finished} onChange={handleChange} />

      <p>{item.task}</p>

      <button onClick={() => onDelete(item.id)}>
        <Trash2 size={16} />
      </button>
    </li>
  );
}

export default TaskList;
