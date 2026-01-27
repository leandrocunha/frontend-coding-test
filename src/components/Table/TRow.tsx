import type { FC } from "react";
import type { TaskPriority } from "../../types";
import type { TRowProps } from "./types";
import { getPriorityClass } from "./utils";

import * as styles from './styles.css';

export const TRow: FC<TRowProps> = ({ task, tasks, setTasks, handleDeleteTask }) => {
    return (
        <tr className={getPriorityClass(task.priority)} key={task.id}>
            <td className={styles.completedColumn}>
                <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={(e) => {
                        const newTasks = tasks.map((t) =>
                            t.id === task.id ? { ...t, completed: e.target.checked } : t
                        );
                        setTasks(newTasks);
                    }}
                />
            </td>
            <td className={`${task.completed ? styles.taskCompleted : ''} ${styles.taskTitleColumn}`}>
                {task.title}
            </td>
            <td>
                <select
                    value={task.priority}
                    onChange={(e) => {
                        const newTasks = tasks.map((t) =>
                            t.id === task.id ? { ...t, priority: e.target.value as TaskPriority } : t
                        );
                        setTasks(newTasks);
                    }}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </td>
            <td>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </td>
        </tr>
    );
};
