import React from 'react'
import { useState } from 'react'

import './form.css'

function Form() {
    return (
        <form className='add-form'>
            <div className='input-group'>
                <label className='form-label'>제목</label>
                <input
                    // class name  왜 ? 'add-input input-body'
                    className='add-input input-body'
                    type="text"
                ></input>
                <label className='form-label'>내용</label>
                <input
                    className='add-input'
                    type="text"
                ></input>
            </div>
            <button className='add-button'>추가하기</button>
        </form>
    );
};

export default Form