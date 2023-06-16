import React, { useState, useEffect } from 'react'
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import Form from 'components/form/Form';
import List from 'components/list/List';

function ToDoList() {
    // 로컬스토리지에 저장 -> JSON언어로 파싱(번역)한다 -> 로컬스토리지에 'ToDoList'를 저장(getItem)
    const getData = () => {
        return JSON.parse(localStorage.getItem('ToDoList'))
    }
    // 자식컴포넌트들끼리의 정보 교환을 위해 공통된 상위 컴포넌트(=TodoList) 에서 넘겨줄 useState(=toDos, setToDos)
    const [toDos, setToDos] = useState(getData())
    // useEffect(:Hook) 을 사용 -> 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 
    // 언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때)
    // 특정 작업을한다.
    // 삭제기능 들어있음 = useEffect 내장되어 있는 cleanup 함수 -> deps가 비어있거나 컴포넌트가 사라질 때 호출 (뒷정리해줌)
    useEffect(() => {
        window.localStorage.setItem('ToDoList', JSON.stringify(toDos))

        //deps 에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 
        // 지정한 값이 바뀔 때에도 호출이 됩니다. 
        // 그리고, deps 안에 특정 값이 있다면 언마운트시에도 호출이되고, 값이 바뀌기 직전에도 호출이 됩니다.
    }, [toDos]);
    // toDos에 빈값 -> 호이스팅시 map은 읽지 못해 오류 발생 -> 빈 배열이라도 넣어줘야 함 
    if (toDos == null) {
        setToDos([]);
    }


    return (
        <Layout>
            <Header />
            <Form toDos={toDos} setToDos={setToDos} />
            <List toDos={toDos} setToDos={setToDos} />
        </Layout>
    );
};

export default ToDoList