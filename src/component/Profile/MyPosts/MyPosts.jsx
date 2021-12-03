import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)
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
})

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'}
                       component={Textarea}
                       placeholder={'Post Massage'}
                       validate={[required, maxLength10]}/>

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts