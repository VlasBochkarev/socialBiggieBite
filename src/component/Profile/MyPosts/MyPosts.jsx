import React from 'react'

import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, my name is Vlas', likesCount: 120},
        {id: 2, message: 'Yo', likesCount: 23},
        {id: 3, message: 'Hi, how are you?', likesCount: 46},
        {id: 4, message: 'Yo yo yo', likesCount: 88},
        
    ]
    let postElements = posts.map( p => <Post message={p.message} like={p.likesCount}/>)

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
                {postElements}
            </div>
        </div>
    </div>
}
export default MyPosts