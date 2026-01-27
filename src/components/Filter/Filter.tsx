import type { FC } from "react";
import type { FilterProps, FilterStatus } from "./types";

import * as styles from './styles.css.ts'

export const Filter: FC<FilterProps> = ({ filter, setFilter }) => {
    return (
        <div className={styles.filterWrapper}>
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as FilterStatus)}
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </div>
    );
}