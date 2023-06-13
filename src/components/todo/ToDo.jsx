import React from 'react'
import './todo.css'

function ToDo() {
    return (
        <div className='todo-container'>
            <div>
                <h2 className='todo-title'>제목입니다.</h2>
            </div>
            <div className='button-set'>
                <button
                    className='todo-delete-button button'
                >
                    삭제하기
                </button>
                <button
                    className='todo-complete-button button'
                >
                    취소
                </button>
            </div>
        </div>
    )
}

export default ToDo