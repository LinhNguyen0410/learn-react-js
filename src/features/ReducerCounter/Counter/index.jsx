import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';

const initState = 0

const UP_ACTION = 'up'
const DOWN_ACTION = 'dpwn'

const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid Action')
    }

}

function Counter() {

    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <span style={{ fontSize: '101px' }}>{count}</span>
            <button style={{ marginLeft: '40px' }} onClick={() => dispatch(UP_ACTION)}>Down</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Up</button>
        </div>
    );
}

export default Counter;