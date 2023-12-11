import React, { useEffect, useState } from "react";
import Task from "./Task";
import tasksService from "../api/tasks.service";

export default function Column({ status, token }) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    tasksService.getTasks(token).then((data) => {
      const filteredTasks = data
        ? data.news_list.filter((task) => task.status_id === status.id)
        : [];
      setTasks(filteredTasks);
    });
  }, [status.id, token]);
  const isNew = status.id === "1";
  return (
    <div className='column'>
      <div
        className='column_title'
        style={{ boxShadow: `4px 4px 4px #${status.color}25` }}
      >
        <div className='column_title_left'>
          <div
            className='circle'
            style={{ backgroundColor: `#${status.color}` }}
          ></div>
        </div>
        <p style={{ color: `#${status.color}` }}>
          {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
        </p>
      </div>
      <div className='tasks'>
        {tasks.map((task) => (
          <Task task={task} key={task.id} isNew={isNew} token={token} color={status.color} />
        ))}
      </div>
    </div>
  );
}
