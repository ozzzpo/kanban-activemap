import React from "react";

export default function Task({ task, isNew }) {
  return (
    <div className='task-card'>
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
      <p className='date'>{task.deadline?.slice(0, 10)}</p>
    </div>
  );
}
