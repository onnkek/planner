import React from 'react';
import './PostList.sass'
import Post from '../Post/Post';

const PostList = (props) => {

    if (!props.data) {
        return;
    }
    const content = props.data.map((item) => {
        const { id, visible, ...itemProps } = item;
        if (visible === false) {
            return;
        }
        return (
            <li key={item.id} className='planner-list'>
                <Post {...itemProps} onDelete={() => props.onDelete(id)} />
            </li>
        );
    });

    return (
        <div className='planner'>
            <div className='app-container'>
                <ul className='planner-container'>
                    {content}
                </ul>
            </div>
        </div>
    );
}

export default PostList;