import React, { useState } from 'react';
import type { Task, TaskPriority } from './types.ts';

import * as styles from './App.css.ts'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');

  const tasksCompleted = tasks.filter((task) => task.completed);

  const getPriorityClass = (priority: TaskPriority) => {
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

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('taskTitle') as string;
    const priority = formData.get('taskPriority') as TaskPriority;

    handleAddTask(title, priority);

    resetForm(e.currentTarget)
  }

  const handleAddTask = (title: string, priority: TaskPriority) => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId: string) => {
    if (!confirm('Are you sure you want to delete this task?')) return;

    const taskIndex = tasks.findIndex((task: Task) => task.id === taskId);

    if (taskIndex === -1) return;

    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);

    setTasks(newTasks);
  };

  const resetForm = (form: HTMLFormElement) => {
    form.reset()
    setTaskTitle('');
  }

  return (
    <>
      <h1>Task Manager Dashboard</h1>

      {
        tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Completed {tasksCompleted.length > 0 && `(${tasksCompleted.length})`}</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr className={getPriorityClass(task.priority)} key={task.id}>
                  <td className={styles.completedColumn}><input type='checkbox' checked={task.completed} onChange={(e) => {
                    const newTasks = tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: e.target.checked } : t
                    );
                    setTasks(newTasks);
                  }} /></td>
                  <td className={`${task.completed ? styles.taskCompleted : ''} ${styles.taskTitleColumn}`}>{task.title}</td>
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
                  <td><button onClick={() => handleDeleteTask(task.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Completed Tasks: {tasksCompleted.length}</td>
                <td colSpan={1}>Total Tasks: {tasks.length}</td>
              </tr>
            </tfoot>
          </table>
        )
      }

      <form onSubmit={handleOnSubmit}>
        <input onChange={(e) => setTaskTitle(e.target.value)} type="text" name="taskTitle" placeholder="Task Title" value={taskTitle} required />
        <select name="taskPriority" defaultValue="Medium">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </>
  )
}

export default App
