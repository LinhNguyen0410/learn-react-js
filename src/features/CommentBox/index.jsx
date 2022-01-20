import React from 'react';
import PropTypes from 'prop-types';
import Comment from './components/comment'

CommentBox.propTypes = {};

function CommentBox(props) {

    const lessonList = [{
        id: 1,
        name: 'Javascript for beginner...'
    },
    {
        id: 2,
        name: 'Javascript operator...'
    },
    {
        id: 3,
        name: 'State & Props in React JS...'
    },]

    return (
        <div>
            <Comment lessons={lessonList} />
        </div>
    );
}

export default CommentBox;