import React from "react";
import Task from "./Task";

const dotColors = {};

export default function Column({ status }) {
  return (
    <div className='column'>
      <div className='column_title'>
        <div className='column_title_left'>
          <div
            className='circle'
            style={{ backgroundColor: `#${status.color}` }}
          ></div>
        </div>
        <p>{status.name.charAt(0).toUpperCase() + status.name.slice(1)}</p>
      </div>
      <Task></Task>
    </div>
  );
}
