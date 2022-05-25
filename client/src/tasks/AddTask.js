import React, { useState } from "react";
import { toast } from "react-toastify";

export const AddTask = ({
  addTask,
  updateTaskDetail,
  detailToUpdate,
  setDetailToUpdate,
}) => {
  const [detail, setDetail] = useState("");

  // setDetail(detailToUpdate);

  const submitTask = async () => {
    if (!detail) {
      toast("No data to add!");
    } else {
      await addTask(detail);
      setDetail("");
      console.log("Done");
    }
  };

  const onUpdateTask = async () => {
    if (!detailToUpdate.detail) {
      toast("No data to update!");
    } else {
      await updateTaskDetail(detailToUpdate);
      setDetailToUpdate({...detailToUpdate ,detail: ''});
      console.log("Done");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="form-group mt-4">
            <div className="input-group">
              {detailToUpdate.detail ? (
                <textarea
                  className="form-control"
                  rows="2"
                  id="taskDetail"
                  placeholder="Add a task..."
                  value={detailToUpdate.detail}
                  onChange={(e) => setDetailToUpdate({...detailToUpdate,detail: e.target.value})}
                />
              ) : (
                <textarea
                  className="form-control"
                  rows="2"
                  id="taskDetail"
                  placeholder="Add a task..."
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />
              )}
              <div className="input-group-append">
                {detailToUpdate.detail ? (
                  <button
                    id="AddButton"
                    type="button"
                    style={{ borderRadius: "0px 4px 4px 0px" }}
                    onClick={onUpdateTask}
                  >
                    UPDATE
                  </button>
                ) : (
                  <button
                    id="AddButton"
                    type="button"
                    style={{ borderRadius: "0px 4px 4px 0px" }}
                    onClick={submitTask}
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
