import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { textAlign } from '@mui/system';

Count.propTypes = {

};

function Count() {
    const [count, setCount] = useState(60)
    let timerID = useRef()
    let prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleCountDown = (e) => {
        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000);

    }

    const handleStop = (e) => {
        clearInterval(timerID.current)
    }
    console.log(count, prevCount.current);

    return (
        <div>
            <p style={{ fontSize: '100px' }}>{count}</p>
            <button onClick={handleCountDown}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Count;