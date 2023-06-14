import React from 'react'
import { useState } from 'react'

import './form.css'

function Form() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState(0);

    const onChangeTitleHandler = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value)
    }

    const onChangeBodyHandler = (e) => {
        setBody(e.target.value);
        console.log(e.target.value)
    }

    const onSunmitHandler = (e) => {
        setId(id + 1);
        setTitle('');
        setBody('');
    }

    return (
        <form className='add-form'>
            <div className='input-group'>
                <label className='form-label'>제목</label>
                <input
                    // class name  왜 ? 'add-input input-body'
                    className='add-input input-body'
                    type="text"
                    value={title}
                    onChange={onChangeTitleHandler}
                ></input>
                <label className='form-label'>내용</label>
                <input
                    className='add-input'
                    type="text"
                    value={body}
                    onChange={onChangeBodyHandler}
                ></input>
            </div>
            <button className='add-button' onClick={onSunmitHandler}>추가하기</button>
        </form>
    );
};

export default Form