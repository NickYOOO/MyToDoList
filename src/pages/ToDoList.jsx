import React from 'react'
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import Form from 'components/form/Form';
import List from 'components/list/List';

import ToDo from 'components/todo/ToDo';

function ToDoList() {
    return (
        <Layout>
            <Header />
            <Form />
            <List />
            <ToDo />
        </Layout>
    );
};

export default ToDoList