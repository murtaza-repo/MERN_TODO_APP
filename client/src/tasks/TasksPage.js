import React, { useState } from "react";
import { NavBar } from "../navigation";
import { TasksPageList } from "./TasksPageList";
import { useProtectedResource } from "./../data/useProtectedResource";
import { AddTask } from "./AddTask";
import { postWithCredentials } from "./../data/postWithCredentials";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TasksPage = ({ user }) => {
  // const { user } = useUser();

  const { data: tasks, setData: setTasks } = useProtectedResource(
    `/tasks/${localStorage.getItem("id")}`,
    []
  );
  const [ detailToUpdate, setDetailToUpdate ] = useState({id:'', detail: ''});

  const addTask = async (detail) => {
    const task = {
      uid: user.uid,
      completed: false,
      detail,
      date: new Date().toISOString(),
    };

    const response = await postWithCredentials(
      `/task/${user.uid}/addTask`,
      task
    );

    const { responseId } = await response.json();

    const taskWithId = {
      ...task,
      _id: responseId,
    };

    setTasks([taskWithId, ...tasks]);

    toast.success("Task Added!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onToggleCheck = async (taskId) => {
    tasks.map((task) => {
      if (task._id === taskId) {
        task.completed = !task.completed;
      }

      return task;
    });

    const task = tasks.filter((task) => task._id === taskId);

    const response = await postWithCredentials(
      `/tasks/${taskId}/updateStatus`,
      task[0]
    );
    const updatedTask = await response.json();

    setTasks(updatedTask);

    toast("Task status changed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onDelete = async (taskId) => {
    const response = await postWithCredentials(
      `/tasks/${taskId}/deleteTask`,
      {}
    );

    const updatedTask = await response.json();

    setTasks(updatedTask);
    toast.error("Task deleted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleUpdate = (taskId) => {
    const task = tasks.filter((task) => task._id === taskId);

    setDetailToUpdate({id: taskId, detail: task[0].detail});
  }

  const updateTaskDetail = async(updateDetail) => {
    tasks.map((task) => {
      if (task._id === updateDetail.id) {
        task.detail = updateDetail.detail;
        task.date = new Date().toISOString();
      }

      return task;
    });

    const task = tasks.filter((task) => task._id === detailToUpdate.id);

    const taskId = task[0]._id;
 
    const response = await postWithCredentials(
      `/tasks/${taskId}/updateTask`,
      task[0]
    );
    const updatedTask = await response.json();

    setTasks(updatedTask);

    toast.success("Task updated!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <NavBar user={user} />
      <ToastContainer />
      <AddTask 
        addTask={addTask}
        updateTaskDetail={updateTaskDetail} 
        detailToUpdate={detailToUpdate}
        setDetailToUpdate={setDetailToUpdate} 
      />
      <TasksPageList
        tasks={tasks}
        onToggleCheck={onToggleCheck}
        onDelete={onDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
};
