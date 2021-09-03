import React from 'react'
import './Profile.module.css'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Profileinfo from './MyPosts/Profileinfo/Profileinfo'
import MyPostsContainer from './MyPosts/MyPostContainer'


const Profile = (props) => {

    

    return <div>
        <Profileinfo />
        <MyPostsContainer store={props.store}/>
    </div>
}
export default Profile