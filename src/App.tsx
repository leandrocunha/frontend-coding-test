import React, { useState } from 'react';
import { Form } from './components/Form/Form.tsx';
import { Header } from './components/Header/Header.tsx';
import { Table } from './components/Table/Table.tsx';

import type { Task, TaskPriority } from './types.ts';

import './App.css.ts'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');


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
      <Header />
      <Table tasks={tasks} setTasks={setTasks} handleDeleteTask={handleDeleteTask} />
      <Form handleOnSubmit={handleOnSubmit} taskTitle={taskTitle} setTaskTitle={setTaskTitle} />
    </>
  )
}

export default App
