import React from 'react';
import { TasksPageListItem } from './TasksPageListItem';


export const TasksPageList = ({tasks, onToggleCheck, onDelete, handleUpdate}) => {
  return (
    <div className='container space-before'>
      <div className='row'>
        {tasks.map(task => (
          
          <TasksPageListItem task={task} key={task._id} onToggleCheck={onToggleCheck} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}
