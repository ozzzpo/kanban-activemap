import React from 'react';
import Task from './Task'

export default function Column(){
    return(
        <div className='column'>
            <div className='column_title'>
                <div className='column_title_left'>
                    <div className='circle'></div>
                </div>
                <p>Новое</p>
            </div>
            <Task></Task>
        </div>
    )
}