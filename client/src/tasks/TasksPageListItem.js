import React from 'react';
import Check from './Check';
import moment from 'moment';

export const TasksPageListItem = ({task, onToggleCheck, onDelete}) => {

  return (
    <div className="col-md-6 col-lg-4 col-sm-12">
        <div className={`card mb-3 taskCard ${task.completed ? "card-success" : ""}`}>
          <div className="card-header">
              <div className="card-title lead text-muted" style={{ display: "inline"}}>Task {task.completed ? "Completed!" : ""}</div>
              <div style={{ display: "inline", float:"right"}}>
                  <Check checked={task.completed} clickListener={() => onToggleCheck(task._id)} />
                  <button className="btn" title="Delete a Task" onClick={() => onDelete(task._id)}><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
          </div>
          <div className="card-body">
            <p className="card-text" style={{whiteSpace:'pre-wrap'}}>
              { task.detail  }
            </p>
            <small className="text-muted">Added On: {moment(task.date).calendar()}</small>
          </div>
        </div>  
      </div>
  )
}
