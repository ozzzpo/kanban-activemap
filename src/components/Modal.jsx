import React, { useState } from "react";
export default function Modal({task, active, isActive, color, token}){
    console.log(task)
    return(
        <div onClick={() => isActive(!active)} className={active ? 'modal active' : 'modal'}>
            <div onClick={e => e.stopPropagation()} style={{boxShadow: `4px 4px 4px #${color}50`}} className='modal_content'>
                <div className='modal_inform'>
                    <div className='modal_header'>
                        <p>{task.title}</p>
                        <input className='file_input' type='file' onChange={onLoad} />
                        <p className='modal_close' onClick={() => isActive(!active)}>X</p>
                    </div>
                    <div className='modal_description'>
                        {task.deadline ? 
                            <div className='descr_span'>
                                <span>Даты: </span>
                                {`${task.news_date} - ${task.deadline}`}
                            </div> :
                            <div className='descr_span'>
                                <span>Дата: </span> 
                                {task.news_date}
                            </div>
                        }
                        {task.news_type_name && <div className='descr_span'>
                            <span>Вид работы: </span>
                            {task.news_type_name}
                        </div>}
                        {task.category_name && <div className='descr_span'>
                            <span>Приоритет: </span>
                            {task.category_name}
                        </div>}
                        {task.departament_title && <div className='descr_span'>
                            <span>Организация-исполнитель: </span>
                            {task.departament_title}
                        </div>}
                        {task.user_fio && <div className='descr_span'>
                            <span>Создатель: </span>
                            {task.user_fio}
                        </div>
                        <div className='modal_photo_title'>
                          <span>{el.sticker?.title}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className='zatemn'></div>
        </div>
      </div>
    </div>
  );
}
