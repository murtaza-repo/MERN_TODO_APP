import React, { useState } from "react";

export const AddTask = ({addTask}) => {
  const [detail, setDetail] = useState("");

  const submitTask = async () => {
      await addTask(detail);
      document.querySelector('#taskDetail').value = '';
      console.log("Done");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="form-group mt-4">
            <div className="input-group">
              <textarea
                className="form-control"
                rows="2"
                id="taskDetail"
                placeholder="Add a task..."
                onChange={e => setDetail(e.target.value)}
              />
              <div className="input-group-append">
                <button type="button" style={{borderRadius: '0px 4px 4px 0px'}} onClick={submitTask}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
