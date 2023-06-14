import React, { useState, useRef } from 'react'
import './form.css'

function Form({ toDos, setToDos }) {

    const initialState = { id: 0, title: "", body: "", isDone: false }
    const [inputToDo, setInputToDo] = useState(initialState)
    const nextId = useRef(3)

    const onChangeHandler = (e) => {
        const { value, name } = e.target
        setInputToDo({ ...inputToDo, [name]: value, id: nextId.current })
        nextId.current++
    }

    const onSunmitHandler = (e) => {
        e.preventDefault();
        setToDos([...toDos, inputToDo])
        setInputToDo(initialState)
    }

    return (
        <form onSubmit={onSunmitHandler} className='add-form' >
            <div className='input-group'>
                <label className='form-label'>제목</label>
                <input
                    // class name  왜 ? 'add-input input-body'
                    className='add-input input-body'
                    type="text"
                    name="title"
                    value={inputToDo.title}
                    onChange={onChangeHandler}
                ></input>
                <label className='form-label'>내용</label>
                <input
                    className='add-input'
                    type="text"
                    name="body"
                    value={inputToDo.body}
                    onChange={onChangeHandler}
                ></input>
            </div>
            <button className='add-button'>추가하기</button>
        </form>
    );
};

export default Form