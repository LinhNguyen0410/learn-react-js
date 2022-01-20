import React, { useEffect, useMemo, useState } from 'react';
import TodoList from './components/TodoList';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from './components/TodoForm';

// this is parent has data
TodoFeature.propTypes = {};

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
            status: 'completed',
        },
        {
            id: 3,
            title: 'Learn',
            status: 'new',
        },
    ]
    //  get url location
    const location = useLocation()
    //location.search : get phần params sau dấu  ? : ?status=new
    const history = useHistory()
    const match = useRouteMatch()
    // get path : phần sau dấu xẹt và trước dấu hỏi


    const [listTodo, setTodoList] = useState(initListTodo)

    const [filterStatus, setFilterStatus] = useState(() => {
        const statusParams = queryString.parse(location.search);
        // console.log(statusParams); { status: 'new' }
        return statusParams.status || 'all'  //  'new'
    })

    useEffect(() => {
        const statusParams = queryString.parse(location.search);
        setFilterStatus(statusParams.status || 'all')

        // khi location.search change
    }, [location.search])


    const handleTodoClick = (todo, index) => {
        // do todo là 1 mảng nên mình làm việc mà thay đổi dữ liệu của nó thì mình cần clone nó ra để tránh bị đè tham chiếu k change dc....
        const newTodoList = [...listTodo]  //  vẫn là 1 object array
        // edit object item in newTodoList toggle stage 
        const newTodo = {
            ...newTodoList[index],
            // vì react hook là replacing nên để giữ đc cái giá trị mà k thay đổi thì mình cần dùng ... để giữ nó lại, cái nào cần cập nhật thì mk mới overwrite nó lại....
            status: newTodoList[index].status === 'new' ? 'completed' : 'new'
        }
        newTodoList[index] = newTodo
        // update todoList
        setTodoList(newTodoList)
    }

    const handleShowAll = () => {
        // setFilterStatus('all') 

        const queryParams = { status: 'all' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowNew = () => {
        // setFilterStatus('new')

        const queryParams = { status: 'new' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowCompleted = () => {
        // setFilterStatus('completed')

        const queryParams = { status: 'completed' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const handleTodoFormSubmit = (values) => {
        // console.log('value form', values);
        const newTodo = {
            id: listTodo.length + 1,
            title: values.title,
            status: 'new'
        }
        const newTodoList = [...listTodo, newTodo]

        setTodoList(newTodoList)
    }

    // dùng useMemo có ý nghĩ khi 2 cái state kia nó thay đổi thì mình mới re-render lại còn ko thì thôi dữ cái memozination cũ...
    const renderTodoAfterFilter = useMemo(() => {
        return listTodo.filter(todo => filterStatus === 'all' || filterStatus === todo.status)
    }, [filterStatus, listTodo])


    return (
        <div>

            <h2>What to do ?</h2>
            <TodoForm onSubmit={handleTodoFormSubmit} />
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