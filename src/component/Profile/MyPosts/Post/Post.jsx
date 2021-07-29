import React from 'react'

import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.items}>
            <img src="https://images.pexels.com/photos/4968844/pexels-photo-4968844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            {props.message}
            <div>
                <span>Like {props.like}</span>
            </div>

        </div>
    )
}
export default Post