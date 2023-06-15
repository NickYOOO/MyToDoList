import React, { useState, useEffect } from 'react'
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import Form from 'components/form/Form';
import List from 'components/list/List';

function ToDoList() {
    const getData = () => {
        return JSON.parse(localStorage.getItem('ToDoList'))
    }

    const [toDos, setToDos] = useState(getData())

    useEffect(() => {
        window.localStorage.setItem('ToDoList', JSON.stringify(toDos))
    }, [toDos]);

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