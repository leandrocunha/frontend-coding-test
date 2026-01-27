import { useState } from 'react';
import './App.css.ts'
import type { Task, TaskPriority } from './types.ts';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string, priority: TaskPriority) => {
    const newTask: Task = {
      id: new Date().toISOString(),
      title,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId: string) => {
    const taskIndex = tasks.findIndex((task: Task) => task.id === taskId);

    if (taskIndex === -1) return;

    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);

    setTasks(newTasks);
  };

  return (
    <>
      <h1>Task Manager Dashboard</h1>

      {
        tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Completed</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td><input type='checkbox' checked={task.completed} onChange={(e) => {
                    const newTasks = tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: e.target.checked } : t
                    );
                    setTasks(newTasks);
                  }} /></td>
                  <td>{task.title}</td>
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
          </table>
        )
      }

      <button onClick={() => handleAddTask(`Task ${tasks.length + 1}`, 'Medium')}>Add Task</button>
    </>
  )
}

export default App
