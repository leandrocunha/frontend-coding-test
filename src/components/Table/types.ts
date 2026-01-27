import type { Task } from '../../types';

export interface TableProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    handleDeleteTask: (taskId: string) => void;
}

export interface TFootProps {
    tasks: Task[];
    tasksCompleted: Task[];
}

export interface THeadProps {
    tasksCompleted: Task[];
}

export interface TRowProps {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    handleDeleteTask: (taskId: string) => void;
}
