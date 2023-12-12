import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import tasksService from "../api/tasks.service";
export default function Task({ task, isNew, token, color }) {
  const [active, isActive] = useState(false);
  const [source, setSource] = useState("");
  const handleLoad = (e) => {
    tasksService.uploadPhotos(token, e.target.files[0]).then((data) => {
      tasksService
        .postPhotos(token, data.name, e.target.files[0].name, task.id)
        .then((data) => console.log(data));
    });
  };
  return (
    <>
      <div
        onClick={() => isActive(!active)}
        className='task-card'
        style={{ boxShadow: `4px 4px 4px #${color}25` }}
      >
        <div className='main-task-info'>
          <p className='task-title'>{task.title}</p>
          <p>
            <span>{isNew ? "Отдел: " : "Исполнитель: "}</span>
            {isNew ? task.department_title : task.assigned_user_fio}
          </p>
          <p>
            <span>Вид работы: </span>
            {task.news_type_name}
          </p>
        </div>
        <p className='date'>
          <span>Создано: </span>
          {task.news_date}
        </p>
      </div>
      {active && (
        <Modal
          task={task}
          active={active}
          isActive={isActive}
          color={color}
          token={token}
          onLoad={handleLoad}
        ></Modal>
      )}
    </>
  );
}
