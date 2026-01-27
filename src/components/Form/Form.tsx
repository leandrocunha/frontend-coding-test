import type { FC } from "react";
import type { FormProps } from "./types";

export const Form: FC<FormProps> = (props) => {
    const { handleOnSubmit, taskTitle, setTaskTitle } = props;

    return (
        <form onSubmit={handleOnSubmit}>
            <input onChange={(e) => setTaskTitle(e.target.value)} type="text" name="taskTitle" placeholder="Task Title" value={taskTitle} required />
            <select name="taskPriority" defaultValue="Medium">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    )
}