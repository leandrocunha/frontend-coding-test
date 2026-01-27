import type { FC } from "react";
import type { TFootProps } from "./types";

export const TFoot: FC<TFootProps> = (props) => {
    const { tasksCompleted, tasks } = props;
    return (
        <tfoot>
            <tr>
                <td colSpan={3}>Completed Tasks: {tasksCompleted.length}</td>
                <td colSpan={1}>Total Tasks: {tasks.length}</td>
            </tr>
        </tfoot>
    );
}