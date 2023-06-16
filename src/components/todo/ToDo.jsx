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
                    //  자식 컴포넌트에 props(프로퍼티)로 이벤트 핸들러나 함수를 전달하여 사용할 때에는 바인딩 필요.
                    // 화살표함수를 통해 할 수 있으며, 매개변수를 받아 사용 가능
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