// this is children has mission render data from parent
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './style.scss'
//npm i --save classnames

// ..cho biết data received will array datatype
TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
    // todoList : PropTypes.array.isRequired
};
//.. set default value of data received will empty array. * Only applies for case data don't required
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null

}

//.. params will object props received from parent
//... can using as below or declare const {} = todoList
function TodoList({ todoList, onTodoClick }) {

    const handleTodoClick = (todoItem, idx) => {
        if (!onTodoClick) return
        onTodoClick(todoItem, idx)
    }

    return (
        <div>
            <ul className='todo-list'>
                {todoList.map((todo, index) => (
                    //  mình tải package classnames và thực hiện gắn classname cho n theo điều kiện. completed đầu tiên là class sẽ dc thêm - Class dc gắn true là class sẽ luon luôn có.
                    <li key={todo.id}
                        className={classnames({
                            'todo-item': true,
                            'completed': todo.status === 'completed'
                        })}
                        onClick={() => handleTodoClick(todo, index)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;