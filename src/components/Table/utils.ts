import type { TaskPriority } from '../../types';
import * as styles from './styles.css';

export const getPriorityClass = (priority: TaskPriority): string => {
    switch (priority) {
        case 'High':
            return styles.priorityHigh;
        case 'Medium':
            return styles.priorityMedium;
        case 'Low':
            return styles.priorityLow;
        default:
            return '';
    }
};
