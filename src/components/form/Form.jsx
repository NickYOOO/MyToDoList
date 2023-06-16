import React, { useState, useRef } from 'react'
import './form.css'

function Form({ toDos, setToDos }) {
    //초기값
    const initialState = { id: 0, title: "", body: "", isDone: false }
    // 인풋 값을 담는 useState
    const [inputToDo, setInputToDo] = useState(initialState)
    //고유한 id값을 만들어준다.(useRef) -> 컴포넌트가 다시 렌더링되어도 useRef로 생성된 id 값은 변경되지 않는 특성이 있다!
    const nextId = useRef(3)

    const onChangeHandler = (e) => {
        //객체 비구조화 할당으로 인해 event.target.name과 event.target.value에서 value와 name을 추출해 사용할 수 있게 된다.
        const { value, name } = e.target
        setInputToDo({ ...inputToDo, [name]: value, id: nextId.current })
        // 함수가 실행될때마다 아이디도 하나씩 같이 증가
        nextId.current++
    }

    const onSubmitHandler = (e) => {
        e.preventDefault(); // from태그 기능 중 submit을 하면 자동으로 페이지를 리랜더링하는데(정보가 다 날아감) 이를 방지
        setToDos([...toDos, inputToDo])
        setInputToDo(initialState) // input창을 빈칸으로!
    }

    return (
        <form onSubmit={onSubmitHandler} className='add-form' >
            <div className='input-group'>
                <label className='form-label'>제목</label>
                <input
                    className='add-input'
                    type="text"
                    name="title"
                    value={inputToDo.title}
                    onChange={onChangeHandler}
                    //  인풋창 -> 빈칸으로 두고 submit -> id가 모두 0으로 출력 -> 삭제/업데이트 시 한꺼번에 이벤트가 일어나는 오류 발생 
                    //  유저가 인풋창에 값을 필수로 넣고 진행할 수 있게 required 속성 추가 
                    required
                />
                <label className='form-label'>내용</label>
                <input
                    className='add-input'
                    type="text"
                    name="body"
                    value={inputToDo.body}
                    onChange={onChangeHandler}
                />
            </div>
            <button className='add-button'>추가하기</button>
        </form>
    );
};

export default Form