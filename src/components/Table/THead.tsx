import type { FC } from "react";
import type { THeadProps } from "./types";

export const THead: FC<THeadProps> = (props) => {
    const { tasksCompleted } = props;
    return (
        <thead>
            <tr>
                <th>Completed {tasksCompleted.length > 0 && `(${tasksCompleted.length})`}</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Actions</th>
            </tr>
        </thead>
    );
}