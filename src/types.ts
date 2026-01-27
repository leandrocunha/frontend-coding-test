export interface Task {
    id: string;
    title: string;
    priority: TaskPriority
    completed: boolean,
    createdAt: string;
}

export type TaskPriority = 'High' | 'Medium' | 'Low';