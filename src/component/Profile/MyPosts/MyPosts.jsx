import React from 'react'

import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    return <div className={s.content}>

        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, my name is Vlas' like='100' />
                <Post message="Hello i am learn React" like='20' />
                <Post message='Hi, how are you?' like='10' />


            </div>
        </div>
    </div>
}
export default MyPosts