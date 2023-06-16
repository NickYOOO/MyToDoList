import React from 'react'
import "./list.css"
import ToDo from 'components/todo/ToDo';
// 다른 형제 컴포넌트들의 event에 의해 부모컴포넌트에서 수정된 props({ toDos, setToDos })들을 넘겨 받는다.
function List({ toDos, setToDos }) {

    const deleteHandler = (selectedId) => {
        const remainedTodos = toDos.filter((toDo) => {
            return toDo.id !== selectedId
        })
        setToDos(remainedTodos)
    }

    const completeHandler = (selectedId) => {
        const completeTodo = toDos.map((toDo) => {
            if (toDo.id === selectedId) {
                return { ...toDo, isDone: !toDo.isDone }
            } else {
                return { ...toDo }
            }
        })
        setToDos(completeTodo)
    }

    return (
        <div className='list-container'>
            <h2 className='list-title'>Working..🔥</h2>
            <div className='list-wrapper'>
                {toDos.map((toDo) => {
                    if (toDo.isDone === false) {
                        return (
                            <ToDo
                                toDo={toDo}
                                key={toDo.id}
                                setToDos={setToDos}
                                deleteHandler={deleteHandler}
                                completeHandler={completeHandler}
                            />
                        );
                    }
                })}
            </div>
            <h2 className='list-title'>Done..!👍🏻</h2>
            <div className='list-wrapper'>
                {toDos.map((toDo) => {
                    if (toDo.isDone === true) {
                        return (
                            <ToDo
                                toDo={toDo}
                                key={toDo.id}
                                setToDos={setToDos}
                                deleteHandler={deleteHandler}
                                completeHandler={completeHandler}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default List