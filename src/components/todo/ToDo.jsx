import React from 'react'
import './todo.css'

function ToDo({ toDo, deleteHandler, completeHandler }) {
    return (
        <div className='todo-container'>
            <div>
                <h2 className='todo-title'>{toDo.title}</h2>
                <div>{toDo.body}</div>
            </div>
            <div className='button-set'>
                <button
                    onClick={() => { deleteHandler(toDo.id) }}
                    className='todo-delete-button button'
                >
                    삭제하기
                </button>
                <button
                    onClick={() => { completeHandler(toDo.id) }}
                    className='todo-complete-button button'
                >
                    {toDo.isDone ? '취소' : '완료'}
                </button>
            </div>
        </div>
    )
}

export default ToDo