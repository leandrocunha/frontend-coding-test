import type { FC } from "react";
import { TFoot } from "./TFoot.tsx";
import { THead } from "./THead.tsx";
import { TRow } from "./TRow.tsx";

import type { TableProps } from "./types.ts";

import * as styles from './styles.css.ts'

export const Table: FC<TableProps> = (props) => {
    const { tasks, setTasks, handleDeleteTask } = props;

    const tasksCompleted = tasks.filter((task) => task.completed);

    return (
        <>      {
            tasks.length === 0 ? (
                <p>No tasks found.</p>
            ) : (
                <table className={styles.table}>
                    <THead tasksCompleted={tasksCompleted} />
                    <tbody>
                        {tasks.map((task) => (
                            <TRow
                                key={task.id}
                                task={task}
                                tasks={tasks}
                                setTasks={setTasks}
                                handleDeleteTask={handleDeleteTask}
                            />
                        ))}
                    </tbody>
                    <TFoot tasksCompleted={tasksCompleted} tasks={tasks} />
                </table>
            )
        }
        </>)
};