import React, { useEffect, useState } from "react";
import Task from "./Task";
import tasksService from "../api/tasks.service";

export default function Column({ status, token, filters }) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    tasksService.getTasks(token).then((data) => {
      const columnTasks = data
        ? data.news_list.filter((task) => task.status_id === status.id)
        : [];
      setTasks(columnTasks);

      if (filters.type || filters.assigned) {
        tasksService
          .getFilteredTasks(token, filters.assigned, filters.type)
          .then((data) => {
            const filteredTasks = data.news_list
              ? data.news_list.filter((task) => task.status_id === status.id)
              : [];
            setTasks(filteredTasks);
            console.log(filteredTasks);
          });
      }
    });
  }, [status.id, token, filters.type, filters.assigned]);

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
        {tasks.length > 0 &&
      (<>{tasks.map((task) => (
        <Task task={task} key={task.id} isNew={isNew} token={token} color={status.color} />
      ))}</>)  
      }
      </div>
    </div>
  );
}
