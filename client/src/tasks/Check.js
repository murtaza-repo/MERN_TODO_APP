import React from "react";

const Check = ({ checked, clickListener }) => {
  if (checked === true) {
    return (
      <button
        title="Undo Task"
        className="btn text-success"
        onClick={clickListener}
      >
        <i className="fa-solid fa-rotate-left"></i>
      </button>
    );
  } else {
    return (
      <button
        title="Mark as done"
        className="btn text-muted"
        onClick={clickListener}
      >
        <i className="fa-solid fa-circle-check"></i>
      </button>
    );
  }
};

export default Check;
