import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './comment.scss'
import className from 'classnames'

Comment.propTypes = {
    lessons: PropTypes.array,
};
Comment.defaultProps = {
    lessons: []
}


function Comment(props) {

    const { lessons } = props
    const [lessonId, setLessonID] = useState(1)

    const showComment = ({ detail }) => {
        // console.log(detail);
    }

    useEffect(() => {
        window.addEventListener(`lesson-${lessonId}`, showComment)
        // clean up
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, showComment)
        }
    }, [lessonId])

    return (
        <div className='lesson'>
            {
                lessons.map((lesson) => (
                    <li className={className({
                        'lesson-item': true,
                        'lesson-item__active': lessonId === lesson.id
                    })}
                        key={lesson.id}
                        onClick={() => setLessonID(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))
            }

        </div>
    );
}

export default Comment;