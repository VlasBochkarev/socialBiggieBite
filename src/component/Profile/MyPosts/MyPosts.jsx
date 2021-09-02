import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'

import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    
    let postElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} />)

    let newPostElement = React.createRef();
    
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))

    }

    return <div className={s.content}>

        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    </div>
}
export default MyPosts