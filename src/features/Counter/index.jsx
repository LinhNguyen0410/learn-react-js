import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './counterSlice';
import './counter.scss'

CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count) // dùng useSelector này lấy dc state trong store và count này cũng dc declare trong store.js

    const handleIncrease = () => {
        const action = increase() // action creator bên counterSlice
        console.log(action);

        dispatch(action) // dispatch và gửi action này lên lại redux (counterSlice)
    }
    const handleDecrease = () => {
        const action = decrease() // action creator bên counterSlice
        console.log(action);

        dispatch(action) // dispatch và gửi action này lên lại redux (counterSlice)
    }

    return (
        <div className='counter-block'>
            <span className='counter'>Counter : {count}</span>
            <div>
                <button className='btn btnIncrease' onClick={handleIncrease}>Increase</button>
                <button className='btn btnDecrease' onClick={handleDecrease}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;