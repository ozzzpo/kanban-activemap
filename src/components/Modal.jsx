import React, { useState } from 'react';

export default function Modal({task, active, isActive, color, token}){
    console.log(task)
    return(
        <div onClick={() => isActive(!active)} className={active ? 'modal active' : 'modal'}>
            <div onClick={e => e.stopPropagation()} style={{boxShadow: `4px 4px 4px #${color}50`}} className='modal_content'>
                <div className='modal_inform'>
                    <div className='modal_header'>
                        <p>{task.title}</p>
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
                        }
                        {task.assigned_user_fio && <div className='descr_span'>
                            <span>Исполнитель: </span>
                            {task.assigned_user_fio}
                        </div>}
                        {task.status_name && <div className='descr_span'>
                            <span>Стадия: </span>
                            {task.status_name}
                        </div>}
                        {task.text && task.text !== '-' && <div className='descr_span'>
                            <span>Описание: </span>
                            {task.text}
                        </div>}
                        {task.attachments.length > 0 && <div className='descr_span'>
                            <span>Фотография: </span>
                            <div className='modal_photo_okr'>
                                {
                                    task.attachments.map((el) => {
                                        return(
                                            <div className='modal_okr'>
                                            <div className='modal_pp'>
                                                <img className='modal_photo' src={`https://team1.activemap.ru/rest/tasks/${task.id}/photos/${el.num}?token=${token}`} />
                                            </div>
                                            <div className='modal_photo_title'>
                                                <span>{el.sticker?.title}</span>
                                            </div>
                                            </div>
                                        )
                                    })
                                } 
                            </div>
                        </div>}
                    </div>
                    <div className='zatemn'></div>
                </div>
            </div>
        </div>
    )
}