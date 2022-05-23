import React from 'react';
import { NavBar } from '../navigation';
import { ToastContainer } from 'react-toastify';
import { TasksPageList } from './TasksPageList';
import { useProtectedResource } from './../data/useProtectedResource';
import { useUser } from './../auth/useUser';
import { AddTask } from './AddTask';
import { postWithCredentials } from './../data/postWithCredentials';

export const TasksPage = ({user}) => {

  // const { user } = useUser();
  console.log(user);
  const {data: tasks, setData: setTasks} = useProtectedResource(`/tasks/${localStorage.getItem("id")}`,[]);

  // console.log(tasks);

  const addTask = async (detail) => {
    const task = {
      uid: user.uid,
      completed: false,
      detail,
      date: new Date().toISOString()
    }

    
    const response = await postWithCredentials(`/task/${user.uid}/addTask`, task);
    
    const { responseId } = await response.json();

    const taskWithId = {
      ...task,
      _id: responseId
    }
     
    setTasks([
      taskWithId,
      ...tasks,
    ]);
    console.log("added!")
  }

  const onToggleCheck = async (taskId) => {
    tasks.map(task => {
      if(task._id === taskId){
        task.completed = !task.completed
      }

      return task;
    });

    const task = tasks.filter(task => task._id === taskId);

    const response = await postWithCredentials(`/tasks/${taskId}/updateStatus`, task[0]);
    const updatedTask = await response.json();
    
    setTasks(updatedTask);
  }

  const onDelete = async (taskId) => {

    const response = await postWithCredentials(`/tasks/${taskId}/deleteTask`, {});
    const updatedTask = await response.json();
    
    setTasks(updatedTask);
  }
 
  return (
    <>
      <NavBar user={user} />
      <ToastContainer />
      <AddTask addTask={addTask} />
      <TasksPageList tasks={tasks} onToggleCheck={onToggleCheck} onDelete={onDelete} />
    </>
  )
}