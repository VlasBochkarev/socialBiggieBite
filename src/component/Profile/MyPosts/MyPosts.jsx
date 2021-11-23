import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>)
    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>My Posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'}/>

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts