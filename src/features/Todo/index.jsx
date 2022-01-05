import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
// this is parent has data

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initListTodo = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'new',
        },
        {
            id: 3,
            title: 'Learn',
            status: 'new',
        },
    ]

    // convert to stage
    const [listTodo, setTodoList] = useState(initListTodo)
    // stage for filter
    const [filterStatus, setFilterStatus] = useState('all')

    /* call back children */
    const handleTodoClick = (todo, index) => {
        // do todo là 1 mảng nên mình làm việc mà thay đổi dữ liệu của nó thì mình cần clone nó ra để tránh bị đè tham chiếu k change dc....
        const newTodoList = [...listTodo]  //  vẫn là 1 object array

        // edit object item in newTodoList toggle stage 
        const newTodo = {
            ...newTodoList[index],

            // ...newTodoList giải ngoặc vuông cho array clone ở trên bằng spread operator chỉ còn lại các object item và cái mình cần là update status còn lại thì giữ nguyên
            status: newTodoList[index].status === 'new' ? 'completed' : 'new'
        }
        newTodoList[index] = newTodo

        // update todoList
        setTodoList(newTodoList)
    }
    const handleShowAll = () => { setFilterStatus('all') }
    const handleShowNew = () => { setFilterStatus('new') }
    const handleShowCompleted = () => { setFilterStatus('completed') }

    const renderTodoAfterFilter = listTodo.filter(todo => filterStatus === 'all' || filterStatus === todo.status)


    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoAfterFilter} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowNew}>Show New</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
            </div>
        </div>
    )
}

export default TodoFeature;