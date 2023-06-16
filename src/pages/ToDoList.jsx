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
    useEffect(() => {
        window.localStorage.setItem('ToDoList', JSON.stringify(toDos))

        //   deps ->  [toDos] 값이 바뀔 때만 useEffect를 실행할게  만약 빈배열 이면 useEffect는 처음에 딱 한번만 실행되고 그 이후로는 어떤일이 일어나도 실행되지 않음!
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