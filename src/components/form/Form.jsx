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
                    // Trouble Shooting: 인풋창을 빈칸으로 두고 submit을 했을 시 id가 모두 0으로 출력되어 삭제/업데이트 시 한꺼번에 이벤트가 일어나는 오류 발생
                    // 해결 방법: 유저가 인풋창에 값을 필수로 넣고 진행할 수 있게 required 속성 추가 
                    className='add-input input-body'
                    type="text"
                    name="title"
                    value={inputToDo.title}
                    onChange={onChangeHandler}
                    required
                ></input>
                <label className='form-label'>내용</label>
                <input
                    className='add-input'
                    type="text"
                    name="body"
                    value={inputToDo.body}
                    onChange={onChangeHandler}
                    required
                ></input>
            </div>
            <button className='add-button'>추가하기</button>
        </form>
    );
};

export default Form